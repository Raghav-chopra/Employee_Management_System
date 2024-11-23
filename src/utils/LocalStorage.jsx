const employees = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Design Homepage",
        "taskDescription": "Create a responsive homepage design.",
        "taskDate": "2024-11-15",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve issues with the login functionality.",
        "taskDate": "2024-11-17",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Write Documentation",
        "taskDescription": "Document the API endpoints.",
        "taskDate": "2024-11-20",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Update Database Schema",
        "taskDescription": "Add new fields for user preferences.",
        "taskDate": "2024-11-18",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Design User Profile",
        "taskDescription": "Create a profile page for the user.",
        "taskDate": "2024-11-22",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 3,
    "name": "Mike Johnson",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Test Payment Gateway",
        "taskDescription": "Verify payment gateway integration.",
        "taskDate": "2024-11-15",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Optimize Images",
        "taskDescription": "Reduce image sizes for faster loading.",
        "taskDate": "2024-11-20",
        "category": "Optimization",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Research Market Trends",
        "taskDescription": "Compile a report on current market trends.",
        "taskDate": "2024-11-25",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Develop Landing Page",
        "taskDescription": "Create a landing page for the new product.",
        "taskDate": "2024-11-28",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Sophia Brown",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create a presentation for the client meeting.",
        "taskDate": "2024-11-30",
        "category": "Communication",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Analyze Feedback",
        "taskDescription": "Review customer feedback and suggest improvements.",
        "taskDate": "2024-12-02",
        "category": "Analysis",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    "id": 1,
    "name": "Alice Williams",
    "email": "admin@exampale.com",
    "password": "123"
  }
];

export const setlocalstorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getlocalstorage = () => {
  const employee = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employee, admin };
};
