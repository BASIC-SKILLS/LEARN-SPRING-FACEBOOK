const feedContainerElem = document.querySelector('#feedContainer');

//피드 리스트 가져오기
function getFeedList() {
    fetch('list2')
        .then(res => res.json())
        .then(myJson => {
            console.log(myJson);
            makeFeedList(myJson);
        });
}

function makeFeedList(data) {
    if(data.length == 0) { return; }

    for(let i=0; i<data.length; i++) {
        const item = data[i];

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item');

        const topDiv = document.createElement('div');
        topDiv.classList.add('top')
        topDiv.innerHTML = `
            <div class="itemProfileCont">
                <img src="/pic/profile/${item.iuser}/${item.mainProfile}">
            </div>
            <div>
                <div>${item.writer}</div>
                <div>${item.location == null ? '' : item.location}</div>
            </div>
        `;

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('itemImg');

        const swiperContainerDiv = document.createElement('div');
        swiperContainerDiv.classList.add('swiper-container');

        const swiperWrapperDiv = document.createElement('div');
        swiperWrapperDiv.classList.add('swiper-wrapper');

        swiperContainerDiv.append(swiperWrapperDiv);
        imgDiv.append(swiperContainerDiv);

        for(let z=0; z<item.imgList.length; z++) {
            const imgObj = item.imgList[z];

            const swiperSlideDiv = document.createElement('div');
            swiperSlideDiv.classList.add('swiper-slide');

            const img = document.createElement('img');
            img.src = `/pic/feed/${item.ifeed}/${imgObj.img}`;
            swiperSlideDiv.append(img);
            swiperWrapperDiv.append(swiperSlideDiv);
        }

        itemContainer.append(topDiv);
        itemContainer.append(imgDiv);
        if(item.ctnt != null) {
            const ctntDiv = document.createElement('div');
            ctntDiv.innerText = item.ctnt;
            ctntDiv.classList.add('itemCtnt');
            itemContainer.append(ctntDiv);
        }
        feedContainerElem.append(itemContainer);
    }

    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
    });
}

getFeedList();

