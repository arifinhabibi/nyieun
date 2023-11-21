class ResponseJSON {
  static success(res, msg) {
    res.status(200).json({
      message: msg,
    });
  }
}

export default ResponseJSON;
