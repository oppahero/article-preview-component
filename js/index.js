const showShareButton = document.getElementById('show-share')
const hideShareButton = document.getElementById('hide-share')
const shareSocialMediaSection = document.getElementById('share-social-media')

function toogleShareOnSocialMedia(){
    shareSocialMediaSection.classList.toggle('share')
}

showShareButton.addEventListener('click', toogleShareOnSocialMedia)
hideShareButton.addEventListener('click', toogleShareOnSocialMedia)
