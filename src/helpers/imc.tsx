 export type level = {
    title:string;
    color: string;
    icon:'down'|'up';
    imc:number[];
    yourImc?:number|null;
}

export const levels: level[] = [
    {title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5]},
    {title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9]},
    {title: 'Sobrepeso', color: '#E2B036', icon: 'down', imc: [24.91, 30]},
    {title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99]}
];

export const calculateImc = (height:number, weight:number)=>{
    const imc = weight / (height * height);   
    console.log(imc)
    for(let i in levels){
        
        if(imc >= levels[i].imc[0]&&imc <= levels[i].imc[1] ){
            let levelCopy:any = {...levels[i]} 
            console.log(levelCopy)           
            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy
        }
    }
    return null   
      
};