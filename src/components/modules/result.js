/*액션 타입*/

// 버튼을 누를 때마다 기준에 따라 push
const PUSH_RESULT = 'result/PUSH_RESULT'

// 뒤로가기를 누를 때마다 타입 pop
const POP_RESULT = 'result/POP_RESULT'

// 라디오를 눌렀을 때 해당 문제의 
const UPDATE_INPUTS = 'result/UPDATE_INPUTS'

const UPDATE_NONSELECTED = 'result/UPDATE_NONSELECTED'

/*액션 생성함수*/
export const pushResult = (page) => ({ type: PUSH_RESULT, page});
export const popResult = () => ({ type: POP_RESULT});
export const updateInputs = (index, page, value) => ({ type: UPDATE_INPUTS, index, page, value})
export const updatenonselected = () => ({type: UPDATE_NONSELECTED})

/*초기 상태*/
const initiolState = {
    result: '',
    first: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    second: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    third: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    fourth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    firstnonselected: -1,
    secondnonselected: -1,
    thirdnonselected: -1,
    fourthnonselected: -1,
}

/*리듀서*/
export default function result(state = initiolState, action){
    switch(action.type){
        case PUSH_RESULT:
            let chr;
            switch(parseInt(action.page)){
                case 1:
                    if(state.first.reduce((stack, tmp) => {return stack+tmp}) > 22) chr = 'P';
                    else chr = 'G';
                    break;
                case 2:
                    if(state.second.reduce((stack, tmp) => {return stack+tmp}) > 22) chr = 'R';
                    else chr = 'E';
                    break;
                case 3:
                    if(state.first.reduce((stack, tmp) => {return stack+tmp}) > 22) chr = 'C';
                    else chr = 'A';
                    break;
                case 4:
                    let sums = state.first.reduce((stack, tmp) => {return stack+tmp});
                    if(sums > 35) chr = '5';
                    else if(sums > 29) chr = '4';
                    else if(sums > 23) chr = '3';
                    else if(sums > 17) chr = '2';
                    else if(sums > 10) chr = '1';
                    else chr = '?';
                }
            console.log(chr);
            return{
                ...state,
                result: state.result + chr
            };
        case POP_RESULT:
            return{
                ...state,
                result: result.slice(0, -1)
            };
        case UPDATE_INPUTS:
            switch(action.page){
                case 1:
                    return{
                        ...state,
                        first: [...state.first.slice(0, action.index-1), parseInt(action.value), ...state.first.slice(action.index, 11)]
                    };
                case 2:
                    return{
                        ...state,
                        second: [...state.second.slice(0, action.index-1), parseInt(action.value), ...state.second.slice(action.index, 11)]
                    };
                case 3:
                    return{
                        ...state,
                        third: [...state.third.slice(0, action.index-1), parseInt(action.value), ...state.third.slice(action.index, 11)]
                    };
                case 4:
                    return{
                        ...state,
                        fourth: [...state.fourth.slice(0, action.index-1), parseInt(action.value), ...state.fourth.slice(action.index, 11)]
                    };
            }
            console.log(state);
        case UPDATE_NONSELECTED:
            let count = 0;
            switch(action.page){
                case 1:
                    for(let i=0; i<state.first.length; i++){
                        if(state.first[i] === 0){count = count + 1}
                    }
                    if(0 < count < 11){
                        return{
                            ...state,
                            firstnonselected: count
                        }
                    };
                case 2:
                    for(let i=0; i<state.second.length; i++){
                        if(state.first[i] === 0){count = count + 1}
                    }
                    if(0 < count < 11){
                        return{
                            ...state,
                            secondnonselected: count
                        }
                    };
                case 3:
                    for(let i=0; i<state.third.length; i++){
                        if(state.first[i] === 0){count = count + 1}
                    }
                    if(0 < count < 11){
                        return{
                            ...state,
                            thirdnonselected: count
                        }
                    };
                case 4:
                    for(let i=0; i<state.fourth.length; i++){
                        if(state.first[i] === 0){count = count + 1}
                    }
                    if(0 < count < 11){
                        return{
                            ...state,
                            fourthnonselected: count
                        }
                    };
            }
        default:
            return state;
        
    }
}