// Type สำหรับสมาชิกวงดนตรี
export interface Member {
  id: string;
  name: string;
  image: string;
  role?: string;
}

// Type สำหรับวงดนตรี
export interface Band {
  id: string;
  name: string;
  logo: string;
  description: string;
  formedYear: number;
  members: Member[];
}