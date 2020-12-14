const myEmojis = ['👨🏾‍💻', '🏀', '🎮', '🏈', '🌯']


function renderEmojisToPage(){
    //reset emojiContainer state to empty string.
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ''

    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}
renderEmojisToPage()


const pushBtn = document.getElementById('push-btn')

//pushing new emojis to emojis array.
pushBtn.addEventListener('click', function(){
    const input = document.getElementById('emoji-input')
    
    if(input.value){//if input.value is truthy after button click, clear input field.
        
        myEmojis.push(input.value)
        input.value = ''//clear input value to empty string.
        //Rendering the emojis to the page; by reusing rendering function 
        renderEmojisToPage()//function that renders emojis to page.
        //unshift() an demoji to the array.
    }
})

//unshifting(add to beginning) emoji to beginning of the myEmojis array.
const unshiftBtn = document.getElementById('unshift-btn')

unshiftBtn.addEventListener('click', function(){
    const input = document.getElementById('emoji-input')//takes data value
    if(input.value){

        myEmojis.unshift(input.value)//adding emoji to beginning of array.
        input.value = ''
        renderEmojisToPage()
    }
})

//pop and shift (pop; removes from end of array. shift; removes from beginning.)
//pop and shift do not care about input value, because they want to remove all left over values.
const popBtn = document.getElementById('pop-btn')
popBtn.addEventListener('click', function(){
    myEmojis.pop()//button removes last item in array
    renderEmojisToPage()
})

const shiftBtn = document.getElementById('shift-btn')
shiftBtn.addEventListener('click', function(){
    myEmojis.shift()//button removes first item in array
    renderEmojisToPage()
})


