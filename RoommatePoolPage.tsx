
import { RoommateProfileCard } from '@/components/RoommateProfileCard';

const dummyRoommates = [
  {
    name: 'John Doe',
    occupation: 'Software Engineer',
    location: 'Hyderabad',
    bio: 'Looking for a clean, non-smoking roommate. Preferably someone working in tech.',
    photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  // Add more mock profiles as needed
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 {
    name: 'Sita Reddy',
    occupation: 'MBA Student',
    location: 'Bangalore',
    bio: 'I love to cook and keep the apartment tidy. Prefer female roommates.',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  
];

export default function RoommatePoolPage() {
  return (
    <div className="p-4">
        <div className="bg-gray-100 text-center text-2xl py-2 rounded-md font-bold text-blue-400">
          Toletu
        </div>  
      <h1 className="text-blue-400 text-2xl text-center font-bold mb-4">Roommate Pool</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dummyRoommates.map((roommate, index) => (
          <RoommateProfileCard key={index} roommate={roommate} />
        ))}
      </div>
    </div>
  );
}
