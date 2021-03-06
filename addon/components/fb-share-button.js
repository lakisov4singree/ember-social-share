import ShareButton from '../components/share-button';
import layout from '../templates/components/fb-share-button';

export default ShareButton.extend({
  layout,
  shareURL: 'https://facebook.com/sharer.php',
  url: "",
  click() {
    let url = this.get('shareURL');
    url += '?display=popup';
    url += '&u=' + encodeURIComponent(this.get('url'));
    url += this.get('title') ? '&title=' + this.get('title') : '';
    url += this.get('image') ? '&picture=' + this.get('image') : '';
    url += this.get('text') ? '&description=' + this.get('text') : '';

    this.openSharePopup(url);
  }
});
