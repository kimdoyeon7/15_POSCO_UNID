//posco
//목표1. 개별 서브 나오기
//1. 모든 서버 숨기기
//2. gnb 자식 li에 마우스를 올리면 자식 sub 보이기 (Node 관계처리)
//3. gnb 자식 li에서 나가면 자식 sub 숨기기

const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.sub')
console.log(gnb,sub)

//1. 모든 서버 숨기기
for(let i of sub){
    i.style.height = '0'
    i.style.overflow = 'hidden'
    i.style.transition = 'all 0.3s'

}
//2. gnb 자식 li에 마우스를 올리면 자식 sub 보이기 (Node 관계처리)

/* for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        i.children[1].style.height = '300px' 
    })
    //3. gnb 자식 li에서 나가면 자식 sub 숨기기
    i.addEventListener('mouseout',()=>{
        i.children[1].style.height = '0'
    })
} */


// sub 한번에 내려오게 //
/* for(let i of sub){
    i.style.height = '0'
    i.style.overflow = 'hidden'
    i.style.transition = 'all 0.3s'
    for(let j of gnb){
    j.addEventListener('mouseover',()=>{
        i.style.height = '300px' 
    })
    j.addEventListener('mouseout',()=>{
        i.style.height = '0'
    })
    }
} */

const bg = document.querySelector('nav .bg')



for(let i of gnb){
    bg.style.height = '0'
    bg.style.transition = 'all 0.3s'
    i.addEventListener('mouseover',()=>{
        for(let j of sub){j.style.height = '300px';}
        bg.style.height = '320px'
    })
    i.addEventListener('mouseout',()=>{
        for(let j of sub){j.style.height = '0';}
        bg.style.height = '0'
    })
}

