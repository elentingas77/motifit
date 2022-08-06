describe('Motifit app', () => {

  const url = 'motifit-project.onrender.com'

  it('should load the website homepage', () => {
    cy.visit(url)
  })

  it('should show the workouts list', () => {
    cy.visit(url)

    cy.contains('Strong Back');
    cy.contains('Lower Body');
    cy.contains('Upper Body');
  })

  it('should show Benefits of exercise on workouts list page', () => {
    cy.visit(url)

    cy.contains('Benefits of Exercise');
  })

  it('should show the navigation bar', () => {
    cy.visit(url)

    cy.contains('Workouts');
    cy.contains('30 Day Plan');
    cy.contains('Challenges');
    cy.contains('Score');
    cy.contains('Construct My Workout');
  })

  it('should navigate to 30 Day Plan page', () => {
    cy.visit(url)

    cy.contains('30 Day Plan').click()
    
    cy.url().should('include', '/30-day-plan')
  })

  it('should navigate to Challenges page', () => {
    cy.visit(url)

    cy.contains('Challenges').click()
    
    cy.url().should('include', '/challenges')
  })

  it('should navigate to Score page', () => {
    cy.visit(url)

    cy.contains('Score').click()
    
    cy.url().should('include', '/score')
  })

  it('should navigate to Construct My Workout page', () => {
    cy.visit(url)

    cy.contains('Construct My Workout').click()
    
    cy.url().should('include', '/construct-workout')
  })

  it('should show the challenges list', () => {
    cy.visit(url)

    cy.contains('Challenges').click();

    cy.contains('Tallinn Challenge');
    cy.contains('Tartu Challenge');
    cy.contains('Haapsalu Challenge');
  })

  it('should show the user role', () => {
    cy.visit(url)

    cy.contains('Beginner');
  })

  it('should show 30 Day Plan', () => {
    cy.visit(url)

    cy.contains('30 Day Plan').click();

    cy.contains('1');
    cy.contains('2');
    cy.contains('3');
    cy.contains('28');
    cy.contains('29');
    cy.contains('30');
  })

  it('should show moves in Construct my workout page', () => {
    cy.visit(url)

    cy.contains('Construct My Workout').click();

    cy.contains('Traps Stretch')
    cy.contains('Shrug')
    cy.contains('Front Raises')
  })


  it('should show my chosen list and overall moves list in Construct my workout page', () => {
    cy.visit(url)

    cy.contains('Construct My Workout').click();

    cy.contains('Workout moves list')
    cy.contains('My chosen moves')
  })


  it('should show score information in Score page', () => {
    cy.visit(url)

    cy.contains('Score').click();

    cy.contains('You have completed')
    cy.contains('Your overall score')
  })


})
