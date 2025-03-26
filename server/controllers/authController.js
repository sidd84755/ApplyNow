import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import transporter from '../components/mailer.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({success:false, message: 'All fields are required' });
  }
  try {
    const existingUser = await User.findOne({email});
    
    if (existingUser) {
      return res.status(400).json({success:false, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({name, email, password: hashedPassword});
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
     });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: 'Welcome to ApplyNow!',
      text: `Hi there we are excited to have you onboard on our platform. Your Destination for high paying Jobs. Your account has been created successfully.`,
    };
    await transporter.sendMail(mailOptions);
    return res.json({success:true, message: 'Register success' });
  } catch (error) {
        res.status(500).json({success:false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({success:false, message: 'All fields are required' });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({success:false, message: 'Invalid credentials' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({success:false, message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
     });
     return res.json({success:true, message: 'Login success' });
  } catch (error) {
        res.status(500).json({success:false, message: error.message });
  }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('token', { httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        });
        return res.json({success:true, message: 'Logged out' });
    } catch (error) {
        res.status(500).json({success:false, message: error.message });
    }
}