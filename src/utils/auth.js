const users = [
  { username: 'testuser', password: 'password123' }
];

export const registerUser = (username, password) => {
  if (users.find(user => user.username === username)) {
    return { success: false, message: 'User already exists' };
  }
  users.push({ username, password });
  return { success: true, message: 'User registered successfully' };
};

export const loginUser = (username, password) => {
  const user = users.find(
    user => user.username === username && user.password === password
  );
  if (user) {
    return { success: true, message: 'Login successful' };
  } else {
    return { success: false, message: 'Invalid username or password' };
  }
};