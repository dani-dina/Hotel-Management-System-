import bcrypt from 'bcryptjs';

export const hashPassword = async(password) =>{
    const salt = await bcrypt.genSalt(11);
    return await bcrypt.hash(this.password,salt);
}

export default hashPassword;