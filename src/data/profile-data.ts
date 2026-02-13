const username = 'ihmorol';

export const profileData = {
  name: 'Ikramul Hasan',
  fullName: 'Ikramul Hasan Moral',
  username,
  email: 'ihmorol@gmail.com',
  location: 'Dhaka, Bangladesh',
  roles: {
    primary: 'CSE Student',
    secondary: 'Full-Stack Developer',
    tertiary: 'Teaching Assistant',
  },
  social: {
    github: `https://github.com/${username}`,
    linkedin: `https://linkedin.com/in/${username}`,
    x: `https://x.com/${username}`,
    facebook: `https://facebook.com/${username}`,
    instagram: `https://instagram.com/${username}`,
    email: `mailto:ihmorol@gmail.com`,
  },
} as const;

