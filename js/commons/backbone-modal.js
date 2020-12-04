var app = app || {};

(function ($) {
  var MainView = Backbone.View.extend({
    el: 'body',
    events: {
      'click [data-toggle="modal"]': 'openModal'
    },
    /**
     * mode: video / image / more / default
     *
     * @param {*} data
     */
    openModal: function (event) {
      var that = this;
      var mode = event.currentTarget.dataset.mode;
      event.preventDefault();
      switch (mode) {
        case 'video':
          that.setModal(event, that.ModalVideoView, 'video-modal-container', false)
          break;
        case 'image':
          that.setModal(event, that.ModalImageView, 'image-modal-container', true)
          break;
        case 'html':
          that.setModal(event, that.ModalHtmlView, 'html-modal-container', false)
          break;
        case 'iframe':
          that.setModal(event, that.ModalIframeView, 'video-modal-container', false)
          break;
        default:
          console.log('modal open')
      }
    },
    setModal: function (event, view, classes, showFooter) {
      app.modalData = event.currentTarget.dataset;
      var view = new view();
      var modal = new Backbone.BootstrapModal({
        content: view,
        title: app.modalData.title,
        animate: true,
        showFooter: showFooter
      });
      modal.open();
      modal.$el.addClass(classes);
      modal.$el.on('hidden.bs.modal', function () {
        modal.$el.remove()
      })
    },
    ModalVideoView: Backbone.View.extend({
      tagName: 'div',
      render: function () {
        this.$el.html(_.template('\
          <div class="dy-video-wrapper dy-video-2">\
            <div class="video-body">\
              <video id="dy-player" class="video-js vjs-big-play-centered" controls preload="auto" poster="<%= app.modalData.poster %>" data-setup="{}">\
                <source src="<%= app.modalData.src %>" type="video/mp4"></source>\
                <source src="<%= app.modalData.src %>" type="video/webm"></source>\
                <source src="<%= app.modalData.src %>" type="video/ogg"></source>\
                <p class="vjs-no-js">\
                  To view this video please enable JavaScript, and consider upgrading to a web browser that\
                  <a href="https://videojs.com/html5-video-support/" target="_blank">\
                    supports HTML5 video\
                  </a>\
                </p>\
              </video>\
            </div>\
          </div>\
        '));
        return this;
      }
    }),
    ModalImageView: Backbone.View.extend({
      tagName: 'div',
      render: function () {
        this.$el.html(_.template('<img src="<%= app.modalData.src %>">'));
        return this;
      }
    }),
    ModalHtmlView: Backbone.View.extend({
      tabName: 'div',
      render: function () {
        var html = $(app.modalData.selector).html();
        this.$el.html(_.template(html))
      }
    }),
    ModalIframeView: Backbone.View.extend({
      tabName: 'div',
      className: 'iframe-video',
      render: function () {
        this.$el.html(_.template('<iframe class="fill-full-width full-box" src="<%= app.modalData.src %>"></iframe>'));
      }
    }),
    render: function () {
      this.$el.html(this.template);
      return this;
    }
  });

  $(document).ready(function () {
    var mainView = new MainView();
  });

})(jQuery)
