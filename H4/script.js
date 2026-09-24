const students = [
  {
    name: "Abiyu Firas",
    class: "XI RPL 1",
    score: 75,
  },
  {
    name: "Donald Prump",
    class: "XI RPL 1",
    score: 50,
  },
  {
    name: "John Doe",
    class: "XI RPL 2",
    score: 90,
  },
  {
    name: "Chat GPT",
    class: "XI RPL 2",
    score: 100,
  },
  {
    name: "Jeanis Eirine Chara",
    class: "XI RPL 1",
    score: 65,
  },
  {
    name: "Joko Cahyadi",
    class: "XI RPL 1",
    score: 85,
  },
  {
    name: "Suinem",
    class: "XI RPL 1",
    score: 70,
  },
  {
    name: "Elon Musk",
    class: "XI RPL 2",
    score: 95,
  },
  {
    name: "Mark Zuckerberg",
    class: "XI RPL 2",
    score: 100,
  },

  {
    name: "Mahmud",
    class: "XI RPL 1",
    score: 60,
  },
];

const studentTable = document.getElementById("studentTable");
const searchInput = document.getElementById("searchInput");
const averageScore = document.getElementById("averageScore");

function renderStudents(data) {
  studentTable.innerHTML = data.map(function (student, index) {
      return `
            <tr>
                <td>${index + 1}</td>

                <td class="student">
                    ${student.name}
                </td>

                <td class="class">
                    ${student.class}
                </td>

                <td class="score">
                    ${student.score}
                </td>
            </tr>
        `;
    })
    .join("");

  const totalScore = data.reduce(function (total, student) {
    return total + student.score;
  }, 0);

  const average = data.length > 0 ? totalScore / data.length : 0;

  averageScore.textContent = average.toFixed(2);
}

renderStudents(students);

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();
  const filteredStudents = students.filter(function (student) {
    return student.name.toLowerCase().includes(keyword);
  });

  renderStudents(filteredStudents);------------------------------------------
});
