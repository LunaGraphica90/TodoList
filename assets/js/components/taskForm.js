console.log('%c' + 'taskForm.js chargé', 'color: #f0f; font-size: 1rem; background-color:#fff');
const taskForm = {

  addAllEventListeners: function(){
    // cibler le form
    let formElement = document.querySelector('.task--add form')
    // ajouter écouteur d'évenement sur "submit"
    formElement.addEventListener('submit', taskForm.handleFormSubmit);
  },

  handleFormSubmit: function(event){
    // empecher le comportement par défaut (envoie des datas/refresh de la page)
    event.preventDefault();
    // recupération du nom de la tache saisie par le user
    let taskNewNameElement = document.querySelector('.task__name-edit');
    //récupération de la valeur saisie par l'utilisateur
    let taskNewName = taskNewNameElement.value;

    let selectCategoriesElement = document.querySelector('.task__category select')
    let categoryName = selectCategoriesElement.value;

    //appel de la méthode permettant de créer le DOM pour une nouvelle tâche
    let taskElement = task.createDOMElement(taskNewName, categoryName);

    // appel de la méthode qui permet d'ajouter la tache dans le DOM (dans la LISTE DES TACHES)
    //todo CETTE METHODE N'EXISTE PAS ENCORE
    tasksList.addTaskInDOM(taskElement);
  }

}