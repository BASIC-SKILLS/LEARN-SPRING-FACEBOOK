const selectedImgListElem = document.querySelector('#selectedImgList');
const imgArrElem = document.querySelector('#imgArr');
imgArrElem.addEventListener('change', () => {
    selectedImgListElem.innerHTML = '';

    const fileList = imgArrElem.files;
    for(let i=0; i<fileList.length; i++) {
        const item = fileList[i];

        const reader = new FileReader();
        reader.readAsDataURL(item);

        //로드 한 후
        reader.onload = () => {
            const img = document.createElement('img');
            img.src = reader.result;
            selectedImgListElem.append(img);
        };
    }
});