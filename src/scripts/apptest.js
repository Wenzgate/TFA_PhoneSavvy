function updateScrollTrigger() {
    // Actualiser les positions des déclencheurs ScrollTrigger
    ScrollTrigger.refresh();
  }
  
  function onResize() {
    // Mettre à jour les déclencheurs ScrollTrigger lors du redimensionnement du conteneur
    
        updateScrollTrigger();
      
  }
  
  // Écouter l'événement de redimensionnement du conteneur
  window.addEventListener("resize", onResize);

ScrollTrigger.create({
    trigger: section, // Sélectionnez l'élément déclencheur
    start: "top center",
    end:"bottom center", // Point de déclenchement
    markers:true,
    onEnter: function() {

        if (isScrollTriggerEnabled) {
        section.classList.add("transition-section--active");
        section.classList.remove('transition-section--hover');
        updateScrollTrigger();
        }
        
        
        // Ajouter la classe à l'élément déclencheur
    },
    onLeave: function() {
        if (isScrollTriggerEnabled) {
        section.classList.remove("transition-section--active");
        section.classList.add('transition-section--hover');
        updateScrollTrigger();
        }
        
        // Supprimer la classe de l'élément déclencheur si nécessaire
    },
    // onUpdate: function (self) {
    //     const isInView = self.isInView && self.isMarkerInView; // Vérifie si l'élément est actuellement visible à l'écran
    //     const isCenter = self.progress === 0.5; // Vérifie si l'élément est au centre de l'écran
  
    //     if (isInView && isCenter) {
    //         section.classList.add("class-to-add");
    //     } else {
    //         section.classList.remove("class-to-add");
    //     }
    //   }
  });
});





function handleScroll() {
    const windowHeight = window.innerHeight;
  
    sections.forEach((element) => {
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top;
  
      // Calculer la position relative de l'élément par rapport à la fenêtre
      const relativePosition = (elementTop / windowHeight) * 100;
  
      // Ajouter la classe lorsque l'élément atteint 40% du top
      if (relativePosition <= 40) {
        element.classList.add("transition-section--active");
        element.classList.remove('transition-section--hover');
      }
  
      // Supprimer la classe lorsque l'élément atteint 30% du top
      if (relativePosition <= 30) {
        element.classList.remove("transition-section--active");
        element.classList.add('transition-section--hover');
      }
    });
  }
  
  // Écouter l'événement de défilement de la fenêtre
  window.addEventListener("scroll", handleScroll);