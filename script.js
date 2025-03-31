let availableKeywords = [
  'HTML',
  'CSS',
  'Easy Tutorials',
  'Web design tutorials',
  'Javascript',
  'Where to learn coding online',
  'Where to learn web desing',
  'How to create a website',
  'welcome',
  'what is reconciliation',
  'what is curcumferance',
  'Can you tell this',
  'how to solve',
  'most expensive',
  'drive age',
  'create a new image slider'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = availableKeywords.filter((keyword)=> {
      return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    })
    console.log(result);
    
  }
  display(result)
  if(!result.length){
    resultBox.innerHTML = ''
  }
  
}

function display(result){
  const content = result.map((list) =>{
    return "<li onclick=selectInput(this)>" + list + "</li>"
  })
  resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list){
  inputBox.value = list.innerHTML
  resultBox.innerHTML = ''
}