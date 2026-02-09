type Role = "Admin" | "User";

function getUserRole(userId: any): void {
  // Simulating a user role retrieval based on user ID
  if (userId === "admin") {
    console.log("admin");
    return;
  } else {
    console.log("User");
    return;
  }
}

const userId = "admin"; // Example user ID
let bookobj = JSON.parse(userId); // Simulating parsing a user ID from a JSON string

type User = {
  id: string;
  name: string;
  role: Number;
};