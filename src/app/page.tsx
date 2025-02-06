import client from "./valkey";

export default function Home() {

  async function valkey() {
    'use server';
    const valkey = client;
  }
  valkey();
  return (
    <div>
      Repo
    </div>
  );
}
