'use script';

const body = document.querySelector('body')
const title_content = document.querySelector('.title_content')
const name_content = document.querySelector('.name_content')
const footer = document.querySelector('footer')
const text_area = document.querySelector('textarea')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const big_lay = document.querySelector('.big_lay')
const another = document.querySelector('.another')
const holding = document.querySelector('.holding')
const viewer = document.querySelector('.viewer')
const All_saves = document.querySelector('.All_saves')
const save = document.querySelector('.save')
const ed = document.querySelector('.ed')
let dataValue = 0;
let editIndex;
let control = function (){
    if (save.textContent=== 'Save Edit'){
        document.querySelector(`[data-index = "${editIndex}"]`).innerHTML=`
            <h2>${title_content.value}</h2>
            <div class="cont">${text_area.value}</div>
            <div class="overlay"></div>
            <div class="others">
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
            </div>
            <button class="second">View</button>
            <p class="tap">TAP TO VIEW</p>
            <p class="label">${name_content.value}</p>`

        save.textContent = 'Save Note'
        name_content.value = title_content.value = text_area.value = ''
        const edit = document.querySelectorAll('.edit')
        edit.forEach(final => {
            final.addEventListener('click', function(e){
                e.stopImmediatePropagation();
                dad = final.parentElement.parentElement
                const head_edit = dad.querySelector('h2')
                const cont_edit = dad.querySelector('.cont')
                const label_edit = dad.querySelector('.label')
                text_area.value = cont_edit.textContent
                name_content.value= label_edit.textContent
                title_content.value = head_edit.textContent
                editIndex = this.parentElement.parentElement.dataset.index
                
                save.textContent = 'Save Edit'
            })
        })
        const second = document.querySelectorAll('.second')
        second.forEach(book => {
            book.addEventListener('click', function() {
                another.classList.remove('hide')
                holding.innerHTML= eachView_content
                viewer.innerHTML=each_view
                const text = document.querySelector('.text')
                const topic = document.querySelector('.topic')
                const times = document.querySelector('.times')
                const viewing = document.querySelector('.viewing') 
                const holder = document.querySelector('.holder')
                const dad = book.parentElement
                text.innerHTML = dad.querySelector('.cont').textContent
                topic.innerHTML = `${dad.querySelector('.label').textContent}: ${dad.querySelector('h2').textContent}`
                times.addEventListener('click', function(){
                    viewing.remove();
                    holder.remove();
                    another.classList.add('hide')
                })
            })
        });
        const del = document.querySelector('.delete')
        del.addEventListener('click', function(){
            del.parentElement.parentElement.remove();
        })
        const overlay = document.querySelectorAll('.overlay')
        overlay.forEach(book => {
            book.addEventListener('click', function() {
                another.classList.remove('hide')
                holding.innerHTML= eachView_content
                viewer.innerHTML=each_view
                const text = document.querySelector('.text')
                const topic = document.querySelector('.topic')
                const times = document.querySelector('.times')
                const viewing = document.querySelector('.viewing') 
                const holder = document.querySelector('.holder')
                const dad = book.parentElement
                text.innerHTML = dad.querySelector('.cont').textContent
                topic.innerHTML = `${dad.querySelector('.label').textContent}: ${dad.querySelector('h2').textContent}`
                times.addEventListener('click', function(){
                    viewing.remove();
                    holder.remove();
                    another.classList.add('hide')
                })
            })
        });
    }
    else{
            const each_note = `
        <div class="saved" data-index = ${dataValue++}>
            <h2>${title_content.value}</h2>
            <div class="cont">${text_area.value}</div>
            <div class="overlay"></div>
            <div class="others">
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
            </div>
            <button class="second">View</button>
            <p class="tap">TAP TO VIEW</p>
            <p class="label">${name_content.value}</p>
        </div>`
        const each_view = `
        <div class="viewing ">
        </div>`
        const eachView_content = `
        <div class="holder">
            <div class="times">&times;</div>
            <div class="view">
                <p class="topic"></p>
                <p class="text"></p>
            </div>
        </div>`
        big_lay.classList.remove('hide')
        setTimeout(() => {
            big_lay.classList.add('hide')
        }, 2000);
        setTimeout(() => {
            footer.insertAdjacentHTML('afterbegin', each_note)
            const overlay = document.querySelectorAll('.overlay')
            text_area.value = name_content.value = title_content.value=''
            overlay.forEach(book => {
                book.addEventListener('click', function() {
                    another.classList.remove('hide')
                    holding.innerHTML= eachView_content
                    viewer.innerHTML=each_view
                    const text = document.querySelector('.text')
                    const topic = document.querySelector('.topic')
                    const times = document.querySelector('.times')
                    const viewing = document.querySelector('.viewing') 
                    const holder = document.querySelector('.holder')
                    const dad = book.parentElement
                    text.innerHTML = dad.querySelector('.cont').textContent
                    topic.innerHTML = `${dad.querySelector('.label').textContent}: ${dad.querySelector('h2').textContent}`
                    times.addEventListener('click', function(){
                        viewing.remove();
                        holder.remove();
                        another.classList.add('hide')
                    })
                })
            });
            const second = document.querySelectorAll('.second')
            second.forEach(book => {
                book.addEventListener('click', function() {
                    another.classList.remove('hide')
                    holding.innerHTML= eachView_content
                    viewer.innerHTML=each_view
                    const text = document.querySelector('.text')
                    const topic = document.querySelector('.topic')
                    const times = document.querySelector('.times')
                    const viewing = document.querySelector('.viewing') 
                    const holder = document.querySelector('.holder')
                    const dad = book.parentElement
                    text.innerHTML = dad.querySelector('.cont').textContent
                    topic.innerHTML = `${dad.querySelector('.label').textContent}: ${dad.querySelector('h2').textContent}`
                    times.addEventListener('click', function(){
                        viewing.remove();
                        holder.remove();
                        another.classList.add('hide')
                    })
                })
            });
            const del = document.querySelector('.delete')
            const edit = document.querySelectorAll('.edit')
            del.addEventListener('click', function(){
                del.parentElement.parentElement.remove();
            })
            edit.forEach(final => {
                final.addEventListener('click', function(e){
                    e.stopImmediatePropagation();
                    dad = final.parentElement.parentElement
                    const head_edit = dad.querySelector('h2')
                    const cont_edit = dad.querySelector('.cont')
                    const label_edit = dad.querySelector('.label')
                    text_area.value = cont_edit.textContent
                    name_content.value= label_edit.textContent
                    title_content.value = head_edit.textContent
                    editIndex = this.parentElement.parentElement.dataset.index
                    
                    save.textContent = 'Save Edit'
                })
            })
        
        }, 2500);
    }
}
save.addEventListener('click', function(e){
   if(name_content.value !== '' && title_content.value !== ''){
        control();
   }
   else{
    prompt('INPUT NAME AND TITLE TO SAVE')
   }
})

one.addEventListener('click', function(e){
    text_area.style.textAlign = "left"
    one.classList.add('select')
    two.classList.remove('select')
    three.classList.remove('select')
})
two.addEventListener('click', function(e){
    text_area.style.textAlign = "center"
    two.classList.add('select')
    one.classList.remove('select')
    three.classList.remove('select')
})
three.addEventListener('click', function(e){
    text_area.style.textAlign = "right"
    three.classList.add('select')
    one.classList.remove('select')
    two.classList.remove('select')
})
text_area.addEventListener('click', function(){
    text_area.classList.add('zehh')
    setTimeout(() => {
        text_area.classList.remove('zehh')
    }, 5000);
})