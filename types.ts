
export interface Subject {
  id: string;
  name: string;
  description: string;
  term: number;
  links: {
    weekNotes: string;
    fullNotes: string;
    books: string;
    more: string;
  };
}

export interface Semester {
  id: number;
  title: string;
  color: string;
  subjects: Subject[];
}

export interface ResourceItem {
  name: string;
  url: string;
  description: string;
}

export interface ResourceCategory {
  category: string;
  items: ResourceItem[];
}