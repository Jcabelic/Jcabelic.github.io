// Projects data structure
const projects = [
  {
    id: 1,
    name: "HRIS System",
    description: "A comprehensive Human Resource Information System with features for employee management, attendance tracking, and payroll processing.",
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com/yourusername/hris",
    live: "https://hris-demo.example.com",
    technologies: ["Laravel", "React", "MySQL", "AWS"],
    features: [
      "Employee Management",
      "Attendance Tracking",
      "Payroll Processing",
      "Report Generation"
    ]
  },
  {
    id: 2,
    name: "Inventory Management System",
    description: "An enterprise-grade inventory management solution with real-time tracking and automated reordering capabilities.",
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com/yourusername/inventory",
    live: "https://inventory-demo.example.com",
    technologies: ["PHP", "JavaScript", "PostgreSQL", "Docker"],
    features: [
      "Real-time Inventory Tracking",
      "Automated Reordering",
      "Supplier Management",
      "Analytics Dashboard"
    ]
  },
  {
    id: 3,
    name: "E-commerce Platform",
    description: "A modern e-commerce platform with advanced features for product management, order processing, and customer engagement.",
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.example.com",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    features: [
      "Product Management",
      "Shopping Cart",
      "Payment Integration",
      "Order Tracking"
    ]
  }
];

// Function to render projects
function renderProjects() {
  const projectsContainer = document.querySelector('#projects-container');
  if (!projectsContainer) return;

  projectsContainer.innerHTML = projects.map(project => `
    <div class="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105" data-aos="fade-up">
      <div class="relative">
        <img src="${project.image}" alt="${project.name}" class="w-full h-48 object-cover">
        <div class="absolute top-4 right-4 flex space-x-2 project-links">
          <a href="${project.github}" target="_blank" class="bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600">
            <i class="devicon-github-original text-xl"></i>
          </a>
          <a href="${project.live}" target="_blank" class="bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600">
            <i class="fas fa-external-link-alt text-xl"></i>
          </a>
        </div>
      </div>
      <div class="p-6">
        <h4 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">${project.name}</h4>
        <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2">
          ${project.technologies.map(tech => `
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300">${tech}</span>
          `).join('')}
        </div>
        <div class="mt-4">
          <h5 class="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h5>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
            ${project.features.map(feature => `
              <li>${feature}</li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');
}

// Function to add a new project
function addProject(project) {
  projects.push(project);
  renderProjects();
}

// Function to update a project
function updateProject(id, updatedProject) {
  const index = projects.findIndex(p => p.id === id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...updatedProject };
    renderProjects();
  }
}

// Function to delete a project
function deleteProject(id) {
  const index = projects.findIndex(p => p.id === id);
  if (index !== -1) {
    projects.splice(index, 1);
    renderProjects();
  }
}

// Initialize projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});

// Export functions for external use
window.projectManager = {
  addProject,
  updateProject,
  deleteProject,
  renderProjects
}; 