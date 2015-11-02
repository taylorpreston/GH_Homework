$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

$.getJSON('https://api.github.com/users/taylorpreston').done(function(data) {
  // console.log(data);

  var name = ('<h1>'+ data.name +'</h1>')
  var username = ('<h2>'+ data.login +'</h2>')
  var profileImg = ('<img src='+data.avatar_url+'/>')
  var dateJoined = ('<span class="octicon octicon-clock"></span><div>'+moment(data.created_at)+'</div>')
  var location = ('<span class="octicon octicon-location"></span><div>'+data.location+'</div>')
  var followers = ('<div>'+data.followers+'</div>')
  var following = ('<div>'+data.following+'</div>')
  var starred = ('<div> 0 </div>')
  var following = data.following

  var nameSec = $('.name')
  var locDate = $('.location-dateJoined')
  var followSec = $('.follow')
  var proPicNav = $('.proPicNav')

  nameSec.append(profileImg)
  nameSec.append(name)
  nameSec.append(username)
  locDate.append(location)
  locDate.append(dateJoined)
  followSec.append(followers)
  followSec.append(following)
  followSec.append(starred)
  proPicNav.prepend(profileImg)


});

$.getJSON('https://api.github.com/users/taylorpreston/repos').done(function(repos) {
    repos.forEach(function(repo){
      // console.log(repo)
      //Repo Properties//
      var repoUrl = repo.url;
      var repoMomentDay = moment(repo.created_at).fromNow();
      var repoLang =repo.language
      var repoElemnt = '<div><a href='+repoUrl+'>'+repo.name+'</a><span class="repoLang"> '+repoLang+' <span class="octicon octicon-star"></span></span><time class="repoTime">' +repoMomentDay+'</time></div>'

      //Repo Section and Classes//
      var RepoDisplay = $('.posted-repos')
      var PopularRepos = $('.popular-repos')
      var allRepos = $('.allRepos')
      var pubRepos = $('.pubRepos')
      var privRepos = $('.privateRepos')
      var forkRepos = $('.forkRepos')
      var mirrorRepos = $('.mirrorRepos')

        RepoDisplay.append(repoElemnt)
        PopularRepos.append(repoElemnt)


    })

    var repoSection = $('.repo')
    var allRepos = $('.all-repos')
    var postedRepos = $('.posted-repos')
    var publicAct = $('.public-activity')
    var tabBtns = $('.tabBtn');
    var tabContainers = $('.tabContainer');

    tabBtns.on('click', function(event){
      var btn = $(event.target);
      var targetTab = $(btn.data('target'));

      tabBtns.removeClass('active');
      btn.addClass('active');
      tabContainers.hide();
      targetTab.fadeIn();
    });


  });


// $('.').append('<>'++'<>')
