const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, quas.",
    },
    {
      id: "2",
      title: "collect all the stars",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, quas.",
    },
    {
      id: "3",
      title: "egg hunt with yoshi",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, quas.",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.e);
      return state;
    case "DELETE_PROJECT":
      console.log("delete project");
      return state;
    case "DELETE_PROJECT_ERROR":
      return state;
    default:
      return state;
  }
};

export default projectReducer;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.21.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.21.0/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
