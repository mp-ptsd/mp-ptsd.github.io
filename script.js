// 文章数据
const articles = [
    {
        id: 1,
        title: "我对音乐的感受",
        date: "2025-03-15",
        views: 287,
        category: "music",
        image: "https://image.uisdc.com/wp-content/uploads/2022/10/xb-wyy-gkcyy2.jpg",
        description: "我是一名充满热情的音乐爱好者和阅读爱好者，在旋律和文字的世界里找到了心灵的栖息地。音乐对我来说不仅仅是背景声音，而是情感的载体和生活的配乐。华语音乐中，林俊杰的深情嗓音和陶喆的R&B风格深深打动我。而日语音乐领域，米津玄师的独特创作风格和充满感染力的表演让我着迷。他们的音乐陪伴我度过了无数个日夜。"
    },
    {
        id: 2,
        title: "重庆生活指南",
        date: "2025-05-10",
        views: 189,
        category: "life",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: "分享我在读书的经历，包括美食推荐和在重庆的一些生活与旅游建议。"
    },
    {
        id: 3,
        title: "美食分享",
        date: "2025-02-05",
        views: 321,
        category: "food",
        image: "https://ts1.tc.mm.bing.net/th/id/R-C.115a95392722e59ff5d357b28124e948?rik=wyH6mDg9utu9IQ&riu=http%3a%2f%2fwww.cqzyx.net%2fu%2fcms%2fwww%2f201604%2f2710093167ix.jpg&ehk=xQGAJw9KDniAiNNLk9Ss0Iw01Txq20vYtUp4ALWPoMc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        description: "小小分享。"
    },
    {
        id: 4,
        title: "摄影入门：掌握光线与构图",
        date: "2024-06-28",
        views: 156,
        category: "photo",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: "初学者摄影指南，教你如何利用光线和构图技巧拍摄出专业级的照片。"
    }
];

// 作品数据
const galleryItems = [
    {
        id: 1,
        title: "山间日出",
        date: "2024-09-12",
        likes: 145,
        category: "photo",
        image: "https://ts1.tc.mm.bing.net/th/id/R-C.16635490bd209866a9644462585ba68f?rik=FC2HTuGwIFOoFQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn09%2f300%2fw1620h1080%2f20180518%2f2d3f-harvfhv1073892.jpg&ehk=2qVX%2fueobSM%2bvfZMdWtS8TFUmCdUeFSExaOPi652yYA%3d&risl=&pid=ImgRaw&r=0",
        description: "在山上拍摄的日出美景，美若仙境，美不胜收。"
    },
    {
        id: 2,
        title: "城市夜景",
        date: "2024-05-08",
        likes: 98,
        category: "photo",
        image: "https://bpic.588ku.com/video_listen/588ku_pic/21/07/17/9b382c3b51571355fc605e0c6f271911.jpg",
        description: "重庆夜景，灯光璀璨，展现现代都市魅力。"
    },
    {
        id: 3,
        title: "喜欢",
        date: "2024-07-03",
        likes: 201,
        category: "design",
        image: "https://tse1-mm.cn.bing.net/th/id/OIP-C.gjgKvWgZgGKWvpz5nrqU4gHaKy?rs=1&pid=ImgDetMain",
        description: "模仿"
    },
    
];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 设置日期为今天
    const today = new Date();
    const dateStr = today.getFullYear() + '-' + 
                  String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                  String(today.getDate()).padStart(2, '0');
    
    document.getElementById('article-date').value = dateStr;
    document.getElementById('gallery-date').value = dateStr;
    
    // 初始化文章和作品
    displayArticles(articles);
    displayGallery(galleryItems);
    
    // 设置导航点击事件
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // 更新活动链接
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // 今日高亮显示
    const todayHighlight = document.querySelector('.today-highlight');
    setTimeout(() => {
        todayHighlight.style.transform = 'scale(1.02)';
        todayHighlight.style.transition = 'transform 0.3s ease';
    }, 1000);
});

// 显示文章
function displayArticles(articlesToShow) {
    const container = document.getElementById('articles-container');
    container.innerHTML = '';
    
    articlesToShow.forEach(article => {
        const articleEl = document.createElement('div');
        articleEl.className = 'card';
        articleEl.innerHTML = `
            <img src="${article.image}" alt="文章封面" class="card-img">
            <div class="card-content">
                <div class="meta">
                    <span><i class="far fa-calendar"></i> ${article.date}</span>
                    <span><i class="far fa-eye"></i> ${article.views}</span>
                </div>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <div class="tag">${getCategoryName(article.category)}</div>
            </div>
        `;
        container.appendChild(articleEl);
    });
}

// 显示作品
function displayGallery(itemsToShow) {
    const container = document.getElementById('gallery-container');
    container.innerHTML = '';
    
    itemsToShow.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'card';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="作品" class="card-img">
            <div class="card-content">
                <div class="meta">
                    <span><i class="far fa-calendar"></i> ${item.date}</span>
                    <span><i class="far fa-heart"></i> ${item.likes}</span>
                </div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="tag">${getCategoryName(item.category)}</div>
            </div>
        `;
        container.appendChild(itemEl);
    });
}

// 搜索文章
function searchArticles() {
    const searchTerm = document.getElementById('article-search').value.toLowerCase();
    const category = document.getElementById('article-category').value;
    const date = document.getElementById('article-date').value;
    
    const filtered = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || article.category === category;
        const matchesDate = date === '' || article.date === date;
        
        return matchesSearch && matchesCategory && matchesDate;
    });
    
    displayArticles(filtered);
}

// 搜索作品
function searchGallery() {
    const searchTerm = document.getElementById('gallery-search').value.toLowerCase();
    const category = document.getElementById('gallery-category').value;
    const date = document.getElementById('gallery-date').value;
    
    const filtered = galleryItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || item.category === category;
        const matchesDate = date === '' || item.date === date;
        
        return matchesSearch && matchesCategory && matchesDate;
    });
    
    displayGallery(filtered);
}

// 获取分类名称
function getCategoryName(categoryCode) {
    const categories = {
        'life': '生活',
        'food': '美食',
        'photo': '摄影',
        'music': '音乐'
    };
    
    return categories[categoryCode] || categoryCode;
}

// 提交留言
function submitMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // 简单验证
    if (!name || !email || !message) {
        showMessage('请填写所有必填字段', 'error');
        return;
    }
    
    // 模拟提交成功
    showMessage('留言已成功发送！我会尽快回复您。', 'success');
    
    // 清空表单
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}

// 显示消息
function showMessage(text, type) {
    const statusEl = document.getElementById('message-status');
    statusEl.textContent = text;
    statusEl.className = type;
    
    // 3秒后隐藏消息
    setTimeout(() => {
        statusEl.textContent = '';
        statusEl.className = '';
    }, 3000);
}
