//console.log('%c' + 'task.js chargé', 'color: #f0f; font-size: 1rem; background-color:#fff');

const task = {

  addAllEventListeners: function(taskElement){

    // ciblage du nom de la tache
    let taskNameElement = taskElement.querySelector('.task__name-display');
    taskNameElement.addEventListener('click', task.handleClickOnTaskName);

    // ciblage du bouton d'édition de la tâche
    let taskEditButtonElement = taskElement.querySelector('.task__button--modify');
    taskEditButtonElement.addEventListener('click', task.handleClickOnEditButton);

    // ciblage de l'input d'édition du nom de la tache
    let taskInputNameElement =  taskElement.querySelector('.task__name-edit');
    
    
    taskInputNameElement.addEventListener('blur', task.handleBlurOnTaskInputName);
    //on surveille les frappes de clavier (le moment ou on relache la touche)
    taskInputNameElement.addEventListener('keyup', task.handleKeyUpOnTaskInputName);

    // ciblage du bouton de validation de la tâche
    let taskValidateButtonElement = taskElement.querySelector('.task__button--validate');
    taskValidateButtonElement.addEventListener('click', task.handleClickOnValidateButton);

    // ciblage du bouton review de la tâche
    let taskIncompleteButtonElement = taskElement.querySelector('.task__button--incomplete');
    taskIncompleteButtonElement.addEventListener('click', task.handleClickOnIncompleteButton);


    // ciblage du bouton d'archivage de la tâche
    let taskArchiveButtonElement = taskElement.querySelector('.task__button--archive');
    taskArchiveButtonElement.addEventListener('click', task.handleClickOnArchiveButton);

    // ciblage du bouton du "désarchivage" de la tâche
    let taskDesarchiveButtonElement = taskElement.querySelector('.task__button--desarchive');
    taskDesarchiveButtonElement.addEventListener('click', task.handleClickOnDesarchiveButton);

    // ciblage du bouton de suppression de la tâche
    //let taskDelateButtonElement = taskElement.querySelector('.task__button--delate');
    //taskDelateButtonElement.addEventListener('click', task.handleClickOnDelateButton);

  },


  handleClickOnTaskName: function(event){
    // récupération de l'élément ayant déclenché l'event
    let taskNameElement = event.currentTarget;
    //console.log(taskNameElement);

    // récupération de l'élément "ancêtre" le plus proche
    // ayant la classe "task"
    let taskElement = taskNameElement.closest('.task');
    //console.log(taskElement);
    // une fois l'élément tâche récupéré
    // nous lui ajoutons la classe CSS 'task--edit'
    taskElement.classList.add('task--edit');
    // ciblage de l'input d'édition de la tache
    let taskNameInputElement = taskElement.querySelector('.task__name-edit');
    console.log(taskNameInputElement);
    taskNameInputElement.focus();

    // BONUS placer le cuseur à la fin de l'input ---->
    // récupérer la taille de texte dans l'input
    let length = taskNameInputElement.value.length;
    // on va placer le curseur à la fin de l'input 
    // (on débute une selection à la fin de l'input; et on arrete la selection à la fin de l'input :
    // ça fait une selection vide !!)
    taskNameInputElement.setSelectionRange(length, length);
    
  },

  handleClickOnEditButton: function(event){
    //on rappelle la fonction précédente, le but étant le même. 
    //Ainsi, si l'utilisateur clique sur le bouton d'édition, le comportement est le même que lorsque l'on clique
    //directement sur le nom de la tâche : l'input d'édition s'affiche
    task.handleClickOnTaskName(event);
  },

  handleBlurOnTaskInputName: function(event){
    //alert('blur');
    //récupération de la valeur saisie par l'utilisateur
    let taskInputNameElement = event.currentTarget;
    let taskNewName = taskInputNameElement.value;
    // récupération de l'élément "ancêtre" le plus proche
    // ayant la classe "task"
    let taskElement = taskInputNameElement.closest('.task');
    //console.log(taskElement);

    //ciblage de l'élément affichant le nom de la tâche (le p)
    let taskNameElement = taskElement.querySelector('.task__name-display');
    // mise à jour du contenu texte de l'élement affichant le nom de la tache
    taskNameElement.textContent = taskNewName;

    // on retire la classe CSS task--edit de l'élement task
    taskElement.classList.remove('task--edit');

  },

  handleKeyUpOnTaskInputName: function(event){
    // event.key nous permet de récupérér le nom de la touche qui a été pressé
    console.log(event.key);
    if(event.key === 'Enter'){
      // on appelle le meme callback quie lorsuq'il y a un event blur sur l'input
      task.handleBlurOnTaskInputName(event);
    }
    
  }, 

  handleClickOnValidateButton: function(event){
    // récupération de l'élément ayant déclenché l'event
    let taskNameElement = event.currentTarget;
    //console.log(taskNameElement);

    // récupération de l'élément "ancêtre" le plus proche
    // ayant la classe "task"
    let taskElement = taskNameElement.closest('.task');
    //console.log(taskElement);
    // une fois l'élément tâche récupéré
    // nous lui ajoutons la classe CSS 'task--complete'
    taskElement.classList.add('task--complete');
    taskElement.classList.remove('task--todo');

    // bonus
    // taskElement.classList.replace('task--todo', 'task--complete');

  },

  handleClickOnIncompleteButton: function(event){
    // récupération de l'élément ayant déclenché l'event
    let taskNameElement = event.currentTarget;
    //console.log(taskNameElement);

    // récupération de l'élément "ancêtre" le plus proche
    // ayant la classe "task"
    let taskElement = taskNameElement.closest('.task');
    //console.log(taskElement);
    // une fois l'élément tâche récupéré
    // nous lui ajoutons la classe CSS 'task--complete'
    taskElement.classList.remove('task--complete');

  },

  handleClickOnArchiveButton: function(event){
    if (window.confirm("Souhaitez-vous archiver la tâche ?")) {
      // récupération de l'élément ayant déclenché l'event
    let taskNameElement = event.currentTarget;
    // récupération de l'élément "ancêtre" le plus proche
    // ayant la classe "task"
    let taskElement = taskNameElement.closest('.task');
    //console.log(taskElement);
    // une fois l'élément tâche récupéré
    // nous lui ajoutons la classe CSS 'task--complete'
    taskElement.classList.add('task--archive');

  }

  },

  handleClickOnDesarchiveButton: function(event){
    // récupération de l'élément ayant déclenché l'event
    let taskNameElement = event.currentTarget;
    //console.log(taskNameElement);

    // récupération de l'élément "ancêtre" le plus proche
    // ayant la classe "task"
    let taskElement = taskNameElement.closest('.task');
    //console.log(taskElement);
    // une fois l'élément tâche récupéré
    // nous lui ajoutons la classe CSS 'task--complete'
    taskElement.classList.remove('task--archive');

  },

  //handleClickOnDelateButton: function(event){
    // récupération de l'élément ayant déclenché l'event
    //let taskNameElement = event.currentTarget;
    //console.log(taskNameElement);

    // récupération de l'élément "ancêtre" le plus proche
    // ayant la classe "task"
    //let taskElement = taskNameElement.closest('.task');
    //console.log(taskElement);
    // une fois l'élément tâche récupéré
    // nous lui ajoutons la classe CSS 'task--complete'
    //taskElement.classList.remove('task--archive');

  //},

  createDOMElement : function(taskName, taskCategoryName){
    //ciblage du template HTML correspondant à une tache
    let template = document.getElementById('task-template');

    // création d'une copie du template pour pouvoir travailler dessus
    // et renseigner les infos de la nouvelle tache.
    let templateForNewTask = template.content.cloneNode(true);

    // remplacer les valeurs dans la copie du template
    // ci dessous cf data-category dans les task
    templateForNewTask.querySelector('.task').dataset.category = taskCategoryName;
    templateForNewTask.querySelector('.task__category p').textContent = taskCategoryName;

    // remplacement du nom de la tâche dans la copie du template
    templateForNewTask.querySelector('.task__name-display').textContent = taskName;

    // input ...
    templateForNewTask.querySelector('.task__name-edit').setAttribute('value', taskName);
    //templateForNewTask.querySelector('.task__name-edit').value = taskName;

    // on enrgistre tous les events sur l'élement du DOM que nous venons de créer
    task.addAllEventListeners(templateForNewTask);

    return templateForNewTask;

  },

}