function status(request, response) {
  response.status(200).json({
    message: "são acima da média",
  });
}

export default status;
