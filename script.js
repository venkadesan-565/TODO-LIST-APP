 let addTask = document.getElementById('addTask');
            let submit = document.getElementById('submit');

            let todoList = document.getElementById('todolist');


            let donelist = document.getElementById('donelist');

            let list = new Array();

            submit.addEventListener('click',(event)=>{
               if(addTask.value!=0){
                list.push(addTask.value);
                todolist.innerHTML += '<li id="'+(list.length-1)+'"><button onclick="completed('+(list.length-1)+')">'+addTask.value+'</button></li><br>'
                addTask.value='';
                console.log(list)
               
               }
            });
            

            function completed(id){

                donelist.innerHTML += '<li>'+list[id]+'</li>'
                document.getElementById(id).style.display= "none";
            }

