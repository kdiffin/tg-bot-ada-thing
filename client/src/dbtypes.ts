export interface Image {
  id: number;
  usersTelegramID: string;
  usersName: string;
  image: string;
  imagePrompt: string;
  public: boolean;
}

export type Database = {
  public: {
    Tables: {
      Image: {
        Row: Image;
        Insert: Omit<Image, "id" | "created_at">;
        Update: Partial<Omit<Image, "id" | "created_at">>;
      };
    };
  };
};

export interface TelegramUser {
  id: number;
  first_name: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}
