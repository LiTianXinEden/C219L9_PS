const categories = [
  {
    name: "Information Technology",
    id: "information-technology",
    sessions: [
      {
        name: "UI/UX Design for Apps",
        id: "C218",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        speaker: {
          name: "Azhar Kamar",
          title: "Lecturer",
        },
      },
      {
        name: "Mobile App Development",
        id: "C346",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        speaker: {
          name: "Derek Lee",
          title: "Lecturer",
          
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "financial-technology",
    sessions: [
      {
        name: "Software Application Development",
        id: "C237",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        speaker: {
          name: "Hannah Lim",
          title: "Lecturer",
          
        },
      },
      {
        name: "Payment Technologies",
        id: "C372",
        desc: "This module introduces students to different payment technologies and systems.",
        speaker: {
          name: "Magdalene Lim",
          title: "Senior Lecturer",
          
        },
      },
    ],
  },
  
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
