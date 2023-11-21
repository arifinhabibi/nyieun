import UserModel from "../models/UserModel";

class UserService {
  static async show(id) {
    return await UserModel.findOne({
      where: {
        id: id,
      },
    });
  }
  static async shows() {
    return await UserModel.findAll({});
  }
  static async create(payload) {
    return await UserModel.create(payload);
  }
  static async update(id, payload) {
    return await UserModel.update(payload, {
      where: {
        id: id,
      },
    });
  }
  static async delete(id) {
    return await UserModel.destroy({
      where: {
        id: id,
      },
    });
  }
}

export default UserService;
