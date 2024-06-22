import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./MainComponent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//slider

const MainComponent = () => {
  const searchOptions = [
    { value: "technology", label: "Technology" },
    { value: "health", label: "Health" },
    { value: "entertainment", label: "Entertainment" },
    { value: "sports", label: "Sports" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const [newsArticles, setNewsArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [page , setPage]= useState(1)
  const navigate = useNavigate();

  const API_KEY = "bb5346dbbf2d4645acb9e720696b6db1";

  const fetchNews = async (category) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`
      );
      setNewsArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      );
      setTopHeadlines(response.data.articles.slice(0, 5));
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  };

  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    setIsSearch(!!query);
    if (query) {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
        );
        console.log("Search results:", response.data.articles);
        setNewsArticles(response.data.articles);
      } catch (error) {
        console.error("Error searching news:", error);
      }
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    fetchNews(option.value.toLowerCase());
  };

  const handleCardClick = (article) => {
       navigate("/detail", { state: { article } });
      };


      const handleExploreClick = () => {
        const selectedArticle = topHeadlines[currentSlide];
        navigate("/detail", { state: { article: selectedArticle } });
      };

  useEffect(() => {
    // Fetch initial news on load
    fetchNews('technology');
    fetchTopHeadlines();
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % topHeadlines.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [topHeadlines.length]);

 const selectPageHandler=(selectedPage)=>{
  if(
    selectedPage >= 1 &&
    selectedPage <= newsArticles.length/10 &&
    selectedPage !== page
  )
   setPage(selectedPage)
  }

  return (
    <div>
      {/* SearchBar */}
      <div className="main_container2">
        <div className="container">
          <div className="header_search">
            <SearchIcon className="header_searchIcon" />
            <input
              placeholder="Search for news articles by keyword or topic"
              className="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="category_btn">
            <Dropdown
              options={searchOptions}
              onChange={handleSelect}
              value={selectedOption}
              placeholder="Sort by category"
              className="custom-dropdown"
            />
          </div>
        </div>
      </div>

      {/* Slider */}
      {!isSearch && topHeadlines.length > 0 && (
        <div className="main_container3">
          <div className="sub_container3">
            <span className="title3">Trending News and Popular Articles</span>
            <div className="img_container3">
              <img
                src={topHeadlines[currentSlide].urlToImage||'https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D'}
                className="img3"
                alt={topHeadlines[currentSlide].title}
              />
            </div>
          </div>
          <div className="img_inside_txt3">
            <span className="img_txt3">{topHeadlines[currentSlide].title}</span>
            <span className="img_sub_txt3">
              {topHeadlines[currentSlide].description}
            </span>
            <div className="btn_container3">
              <button className="btn3" onClick={handleExploreClick}>Explore</button>
              <ArrowForwardIcon
                style={{ fontSize: 17, marginRight: 10, color: "white" }}
                className="arrow"
              />
            </div>
          </div>
        </div>
      )}

      {/* News Cards */}
      <div className="card_main_container">
        <div className="card_container">
          <span className="card_heading">
            Latest Updates in {selectedOption ? selectedOption.label : "World"}
          </span>
          <div className="card_sub_container">
            {newsArticles.slice(page*10-10,page*10).map((article, index) => (
              <div key={index} className="card_img_container" onClick={()=>handleCardClick(article)}>
                <img
                  src={article.urlToImage || 'https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D'}
                  className="card_img"
                  alt={article.title || "Title not found"}
                />
                <span className="card_img_heading">{article.title || "Title not found"}</span>
                <span className="card_sub_heading">{article.description || "Description not found"}</span>
                <span className="card_timestamp">{new Date(article.publishedAt).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer_main_container">
      {newsArticles.length>0 &&(
        <div className="footer_sub_container">
          <div className="footer_btn1"  onClick={()=>selectPageHandler(page - 1)}>
            <ChevronLeftIcon style={{ color: 'white' }} /> <span style={{color:"white"}}> Previous </span>
          </div>
          {[...Array(newsArticles.length/10)].map((_,i)=>{
            return <span onClick={()=>selectPageHandler(i+1)} key={i} className= {page == i+1 ? "pagination_no":""} >{i+1}</span>
          })}
          <div className="footer_btn1" onClick={()=>selectPageHandler(page + 1)}>
            <span  style={{color:'white'}}>Next</span>
            <ChevronRightIcon style={{ color: 'white' }} />
          </div>
        </div>
       )}
      </div>
    </div>
  );
};

export default MainComponent;



