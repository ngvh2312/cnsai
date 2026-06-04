/* ============================================================
   DIGITAL PORTFOLIO - SCRIPT.JS (v4 - Updated Content)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const navLinks = document.querySelectorAll('.nav-link');
  const pageSections = document.querySelectorAll('.page-section');
  const menuToggle = document.getElementById('menu-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  const navbar = document.getElementById('navbar');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close');

  function switchTab(tabId) {
    navLinks.forEach(l => l.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
    if (activeNav) activeNav.classList.add('active');

    pageSections.forEach(s => s.classList.remove('active', 'visible'));

    const target = document.getElementById(tabId);
    if (target) {
      target.classList.add('active');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          target.classList.add('visible');
          triggerReveal(target);
        });
      });
    }

    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      switchTab(link.getAttribute('data-tab'));
    });
  });

  document.querySelectorAll('.nav-link-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      switchTab(btn.getAttribute('data-tab'));
    });
  });

  const brand = document.querySelector('.navbar-brand');
  if (brand) {
    brand.addEventListener('click', e => {
      e.preventDefault();
      switchTab('home');
    });
  }

  switchTab('home');

  function closeMobileMenu() {
    if (menuToggle) menuToggle.classList.remove('open');
    if (navbarMenu) navbarMenu.classList.remove('open');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navbarMenu.classList.toggle('open');
    });
  }

  document.addEventListener('click', e => {
    if (navbar && !navbar.contains(e.target)) closeMobileMenu();
  });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (navbar) {
          navbar.classList.toggle('scrolled', window.scrollY > 20);
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  function triggerReveal(container) {
    const els = container.querySelectorAll('.reveal');
    els.forEach((el, i) => {
      el.classList.remove('revealed');
      setTimeout(() => {
        el.classList.add('revealed');
      }, 60 * i);
    });
  }

  // ===========================
  // 6. MODAL SYSTEM (Báo cáo)
  // ===========================
  const reports = {
    1: {
      badge: 'Bài 1',
      title: 'Thao tác cơ bản với tệp tin và thư mục',
      objective: 'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows (có thể điều chỉnh cho macOS/Linux).',
      process: [
        'Tạo thư mục mới (ThucHanh_hotensinhvien) và tạo tệp tin văn bản.',
        'Thực hành đổi tên, sao chép (Copy & Paste) và di chuyển (Cut & Paste) tệp tin.',
        'Thực hành xóa vĩnh viễn và khôi phục tệp tin từ Thùng rác.'
      ],
      link: 'https://drive.google.com/file/d/1u1YZnFsFdtPvBWt3WjD0MXG6jiMzUrzT/view?usp=sharing'
    },
    2: {
      badge: 'Bài 2',
      title: 'Tìm kiếm và đánh giá thông tin học thuật',
      objective: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
      process: [
        'Xây dựng chiến lược từ khóa và sử dụng toán tử tìm kiếm trên Google Scholar.',
        'Đánh giá nghiêm ngặt tài liệu qua 5 tiêu chí: Tác giả, Cơ quan xuất bản, Phương pháp, Trích dẫn, Tính cập nhật.',
        'Tổng hợp, xếp hạng nguồn thông tin và định dạng danh mục tài liệu tham khảo (Harvard).'
      ],
      link: 'https://drive.google.com/file/d/1QegNmEXBQDbaobuNN1AgmPQJNSe8LntO/view?usp=sharing'
    },
    3: {
      badge: 'Bài 3',
      title: 'Viết prompt hiệu quả cho các tác vụ học tập',
      objective: 'Phát triển kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.',
      process: [
        'Thiết kế và nâng cấp các phiên bản Prompt từ cơ bản đến nâng cao (Role Prompting, Chain-of-Thought).',
        'Thử nghiệm các tác vụ: Giải thích khái niệm OOP, Tạo bộ câu hỏi trắc nghiệm, và Tóm tắt kiến trúc Backend.',
        'Áp dụng 4 nguyên tắc cốt lõi: Xác định Vai trò, Định dạng rõ ràng, Xác định Đối tượng, và Cung cấp ví dụ (Few-shot).'
      ],
      link: 'https://drive.google.com/file/d/1b2O5ZJyadfeGtIS3wQ9CXg2bU9qTU_MF/view?usp=sharing'
    },
    4: {
      badge: 'Bài 4',
      title: 'Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
      objective: 'Thành thạo các công cụ hợp tác trực tuyến và thể hiện năng lực quản lý, điều phối cá nhân trong dự án nhóm.',
      process: [
        'Quản lý source code trên GitHub và soạn thảo đặc tả cộng tác qua Google Docs.',
        'Thiết lập hệ thống thư mục phân cấp và phân quyền bảo mật trên Google Drive.',
        'Giải quyết các thách thức thực tế: Trôi thông tin, Xung đột tài liệu (Conflict), và Khó đánh giá tiến độ dự án.'
      ],
      link: 'https://drive.google.com/file/d/1uB_lgsuH5vM0yzRrcoLwdxIvL_xtzK5f/view?usp=sharing'
    },
    5: {
      badge: 'Bài 5',
      title: 'Sáng tạo nội dung số',
      objective: 'Thiết kế và trình bày báo cáo trực quan sinh động, ứng dụng các mô hình tạo sinh hình ảnh chuyên nghiệp và phát triển tư duy thiết kế web.',
      process: [
        'Xây dựng cấu trúc và biên tập nội dung text bằng Google Gemini.',
        'Tạo các hình ảnh minh họa (vector icon minimalist) bằng DALL-E 3.',
        'Dàn trang và thiết kế luồng dữ liệu (Data flow) trực quan bằng Canva AI (Magic Design).'
      ],
      link: 'https://drive.google.com/file/d/11EzJQ1RE-kqW_El_jTjhWf646tiC2e-9/view?usp=sharing'
    },
    6: {
      badge: 'Bài 6',
      title: 'An toàn & liêm chính học thuật',
      objective: 'Nhận thức sâu sắc về bản quyền, chống đạo văn, bảo mật thông tin và thiết lập ranh giới sử dụng AI an toàn.',
      process: [
        'Phân tích chính sách "mở nhưng có kiểm soát" về AI của các trường đại học.',
        'Thực hành lập dàn ý tiểu luận bằng AI, đánh giá "ảo giác" (hallucination) và tích hợp nội dung cá nhân.',
        'Tuân thủ 6 nguyên tắc cá nhân: AI là trợ lý, Minh bạch tuyệt đối, Kiểm chứng 100%, Bảo vệ dữ liệu, Bảo vệ tư duy phản biện.'
      ],
      link: 'https://drive.google.com/file/d/1lrXFhh3nEqEZgAXrSR5_6FwGkpRB5PlV/view?usp=sharing'
    }
  };

  function openModal(id) {
    const data = reports[id];
    if (!data || !modalBody || !modalOverlay) return;

    const items = data.process.map(p => `<li>${p}</li>`).join('');

    modalBody.innerHTML = `
      <span class="modal-badge">${data.badge}</span>
      <h2>${data.title}</h2>
      
      <div class="modal-block" style="margin-top: 16px;">
        <h4>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          Mục tiêu
        </h4>
        <p>${data.objective}</p>
      </div>
      
      <div class="modal-block">
        <h4>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          Nội dung thực hành
        </h4>
        <ul>${items}</ul>
      </div>
      
      <a href="${data.link}" class="btn btn-primary" style="width:auto; display:inline-flex; margin-top:12px;" target="_blank">
        Truy cập sản phẩm / Minh chứng (Tại đây)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(parseInt(btn.getAttribute('data-project')));
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

});
