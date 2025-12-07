function status(request, response) {
  response.status(200).json({ mensage: 'It works!' });
}

export default status;
