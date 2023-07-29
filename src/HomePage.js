// Complete the HomePage Component and export it
import Form from './Form';
export let name="YourName";
export let email="xyz@pqr.com";

export default function HomePage() {
 
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}
