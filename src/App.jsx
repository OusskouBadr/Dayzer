import './App.css'
import dayzerlogo from './dayzerlogo.jpg'
import womenpic from './womenpic.jpg'

function App() {
  return (
    <div className="App">
      <aside>
        <div className="aside">

        <div className="namesite">
          <img src={dayzerlogo} alt="" className='dayzerlogo'/>
          <h1>Dayzer</h1>
        </div>

        <div className="photo">
          <div className="picture">
            <img src={womenpic} alt="" className='womenpic'/>
          </div>

          <div className="womendescription">
            <div className="name"><h3>Kristin Watson</h3></div>
            <div className="work">UI/UX Designer</div> 
          </div>

        </div>

        <div className="nav">
        <div className='flexdirrow plan'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><rect x="0" y="0" width="1024" height="1024" fill="none" stroke="none" /><path fill="black" d="M112 880c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V460H112v420zm768-696H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v176h800V216c0-17.7-14.3-32-32-32z"/></svg><h3 className='margin'>Plan</h3></div>
        <div className='flexdirrow'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><rect x="0" y="0" width="20" height="20" fill="none" stroke="none" /><path fill="black" d="M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3ZM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm1.354 4.354l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 1 1 .674-.738l.397.362l1.412-1.412a.5.5 0 1 1 .708.708Zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0ZM11 12.75h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1Zm-.5-4.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5Z"/></svg><h3>Task List</h3></div>
        <div className='flexdirrow'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><rect x="0" y="0" width="1024" height="1024" fill="none" stroke="none" /><path fill="black" d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z"/></svg><h3>Projects</h3>
        <div className="arrow"></div></div>
        <div className="projectssuite">
          <div className="num10"><div className="pink"></div><div>Numero 10</div></div>
          <div className='gracearoma'><div className='green'></div><div>Grace Aroma</div></div>
          <div className='petzapp'><div className="bleuclair"></div><div>Petz App</div></div>
          <div className='privateworks'><div className="purple"></div><div>Private Works</div></div>
          <div className="addnew"><div className="plus"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg></div><div className='textnew'>Add New</div></div>
        </div>

        <div className='flexdirrow tags'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="black" d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8zM7 9a2 2 0 1 1 .001-4.001A2 2 0 0 1 7 9z"/></svg><h3>Tags</h3></div>
        </div>

        <div className="logout">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5l-5-5m5 5H9"/></svg>
          <h4>Log out</h4>
        </div>
        </div>
      </aside>

      <body>
        <div className="topdiv">
          <div className="arrowleft"></div>
          <div className='archive'>Archive</div>
          <div className='todays'>Today's Plan</div>
          <div className='week'>This Week</div>
          <div className="arrowright"></div>
        </div>

        <div className="home">

          <div className="messaging">Messaging ID framework development for the marketing branch</div>
            
            <div className="stats">
              <h2 className="statstitle">Stats</h2>
              <div className="gooddaydiv">
                <h4 className="daykristin">Good day,<br></br> Kristin!</h4>
                <div className="tracking">Start tracking</div>
              </div>

              <div className="taskshoursdiv">
                <div className="tasksfinished">
                  <h2 className='tasknumber'>20<br></br></h2>
                  <p className="taskstext"><span class="iconify" data-icon="fluent:clipboard-task-24-filled" data-width="18" data-height="18"></span>Tasks finished</p>
                </div>
                <div className="trackedhours">
                  <h2 className='trackednumber'>5,5</h2>
                  <p className="trackedhourstext"><span class="iconify" data-icon="ic:baseline-access-time-filled" data-width="18" data-height="18"></span>Tracked hours</p>
                </div>
              </div>
              <div className="dailyplandiv">
                <h4 className="dailytitle">Your daily plan</h4>
                <p className="complete">4 of 6 completed</p>
                <div className="loader">
                  <div className="float">70%</div>
                </div>
              </div>
            </div>

            <div className="yourtasks">
              <h2 className="yourtaskstitle">Your tasks today</h2>
              <div className="triplediv">
                <div className='blogsocialdiv'>
                  <div className="titlediv">
                    <p className="titleblog">Numero 10</p>
                    <p className='titleblog marginleft'>4h</p>
                  </div>
                  <h4 className="blogsocialtitle">Blog and social posts</h4>
                  <p className="deadline"><span class="iconify" data-icon="bi:exclamation-circle"></span>Deadline is today</p>
                </div>
                <div className='campaigndiv'>
                  <div className="titlediv">
                    <p className="titleblog">Grace Aroma</p>  
                    <p className="titleblog marginleft">7d</p>
                  </div>
                  <h4 className="blogsocialtitle">New campaign review</h4>
                  <p className="deadline"><span class="iconify" data-icon="emojione-monotone:digit-one"></span>new feedback</p>
                </div>
                <div className='crossplatdiv'>
                  <div className="titlediv">
                    <p className="titleblog">Petz App</p>
                    <p className="titleblog marginleft">2h</p>
                  </div>
                  <h4 className="blogsocialtitle">Cross-platform and browser QA</h4>
                </div>  
              </div>
            </div>
        </div>

        <div className="asideright">
          <div className="topaside">

            <div className="box1">Eclair</div>
            <div className="box2"> 
              <div className="iconebackground">
              <span class="iconify background" data-icon="fa6-solid:folder-plus" data-width="25" data-height="25"></span>
              </div>
              New project
            </div>
             <div className="box3">Tasks</div>
            <div className="box4">Chat</div>
          </div>

          <div className="botaside">
          
          </div>  
        </div>

      </body>

    </div>
  );
}

export default App;
