let alterdata = [
    {
      fundacao: 1989,
      socios: 'Ladmir Carvalho e José Ronaldo da Costa'
    }
  ]
  
  date = new Date()
  idade = date.getFullYear() - alterdata[0]['fundacao']
  
  console.log('A Alterdata tem ' + idade + ' anos')