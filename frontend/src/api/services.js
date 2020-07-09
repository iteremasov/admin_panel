export const fetchPost = async (url, body) => {
	try {
    return await fetch(url, {
      body: body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
	} catch (error) {
		return error;
	}
};

export const fetchGet = async (url, body) => {
	try {
    return await fetch(url, {
      method: 'GET',
      headers: {

      },
    });
	} catch (error) {
		return error;
	}
};