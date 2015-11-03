$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

var urlProfile = 'https://api.github.com/users/taylorpreston'
var urlRepos = 'https://api.github.com/users/taylorpreston/repos'
var postRepos = $('.posted-repos')
var popularRepos = $('.popular-repos')
var profile = $('.profile')

function DisplayRepos(data){
  var repoThings = $('#repoTemplate')
  var repoTemp = repoThings.html()
  //repo compiling function:
  var compiledRepoTemp = _.template(repoTemp)
  postRepos.append(compiledRepoTemp(data))
  popularRepos.append(compiledRepoTemp(data))
};

function getRepoData(){
  $.ajax(urlRepos).done(function(data){
    data.forEach(function(repo){
      var repoData = {
        repoUrl: repo.html_url,
        repoName: repo.name,
        repoLang: repo.language,
        repoMomentDay: moment(repo.created_at).fromNow(),
      }
      DisplayRepos(repoData);
    });
  });
};

function DisplayProfile(data){
  var profileThing = $('#profileTemplate')
  var profileTemp = profileThing.html()
  var compiledProfileTemp = _.template(profileTemp)
  profile.append(compiledProfileTemp(data))
}

function getProfileData(){
  $.ajax(urlProfile).done(function(data){
    profileData = {
      name: data.name,
      username: data.login,
      profileImg: data.avatar_url,
      location: data.location,
      dateJoined: moment(data.created_at),
      followers: data.followers,
      following: data.following,
    }
    DisplayProfile(profileData)
  });
}

getProfileData()

getRepoData()








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







// repoName, repoLang, repoMomentDay
