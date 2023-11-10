import User from '../models/UserModel.js';


// Ambil semua data user
export const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Ambil data user berdasarkan id
export const getUsersById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error){
        res.status(404).json({ message: error.message });
    }
}

// Simpan data user
export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try{
        const insertUser = await user.save();
        res.status(201).json(insertUser);
    } catch (error){
        res.status(400).json({ message: error.message });
    }
}

// Update data user
export const updateUser = async (req, res) => {
    try{
        const updateuser = await User.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateuser);
    } catch (error){
        res.status(400).json({ message: error.message });
    }
}

// Hapus data user
export const deleteUser = async (req, res) => {
    try{
        const deleteuser = await User.deleteOne({_id: req.params.id});
        res.status(201).json(deleteuser);
    } catch (error){
        res.status(400).json({ message: error.message });
    }
}