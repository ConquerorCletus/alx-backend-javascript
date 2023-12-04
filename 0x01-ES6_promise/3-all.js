import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const userPhoto = uploadPhoto();
  const userProfile = createUser();

  return Promise.all([userPhoto, userProfile]).then((profile) => {
    console.log(`${profile[0].body} ${profile[1].firstName} ${profile[1].lastName}`);
  }).catch(() => { console.log('Signup system offline'); });
}
