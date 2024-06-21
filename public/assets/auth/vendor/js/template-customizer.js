<div id="template-customizer" className="invert-bg-white">
  <a href="javascript:void(0)" className="template-customizer-open-btn" tabIndex="-1"></a>

  <div className="p-4 m-0 lh-1 border-bottom template-customizer-header position-relative py-3">
    <h4 className="template-customizer-t-panel_header mb-2"></h4>
    <p className="template-customizer-t-panel_sub_header mb-0"></p>
    <div className="d-flex align-items-center gap-2 position-absolute end-0 top-0 mt-4 me-3">
      <a href="javascript:void(0)" className="template-customizer-reset-btn text-body" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Reset Customizer">
        <i className="bx bx-refresh fs-4"></i>
        <span className="badge rounded-pill bg-danger badge-dot badge-notifications d-none"></span>
      </a>
      <a href="javascript:void(0)" className="template-customizer-close-btn fw-light text-body" tabIndex="-1">
        <i className="bx bx-x fs-4"></i>
      </a>
    </div>
  </div>

  <div className="template-customizer-inner pt-4">
    {/* Theming */}
    <div className="template-customizer-theming">
      <h5 className="m-0 px-4 py-4 lh-1 d-block">
        <span className="template-customizer-t-theming_header bg-label-primary rounded-1 py-1 px-2 fs-big"></span>
      </h5>

      {/* Style */}
      <div className="m-0 px-4 pb-3 pt-1 template-customizer-style w-100">
        <label htmlFor="customizerStyle" className="form-label d-block template-customizer-t-style_label"></label>
        <div className="row px-1 template-customizer-styles-options"></div>
      </div>

      {/* Themes */}
      <div className="m-0 px-4 pt-3 template-customizer-themes w-100">
        <label htmlFor="customizerTheme" className="form-label template-customizer-t-theme_label"></label>
        <div className="row px-1 template-customizer-themes-options"></div>
      </div>
    </div>
    {/* Theming */}

    {/* Layout */}
    <div className="template-customizer-layout">
      <hr className="m-0 px-4 my-4" />
      <h5 className="m-0 px-4 pb-4 pt-2 d-block">
        <span className="template-customizer-t-layout_header bg-label-primary rounded-1 py-1 px-2 fs-big"></span>
      </h5>

      {/* Layout(Menu) */}
      <div className="m-0 px-4 pb-3 d-block template-customizer-layouts">
        <label htmlFor="customizerStyle" className="form-label d-block template-customizer-t-layout_label"></label>
        <div className="row px-1 template-customizer-layouts-options">
          {/* Uncomment If using offcanvas layout */}
          {/* <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="layoutRadios" id="layoutRadios-offcanvas"
                value="static-offcanvas" />
              <label className="form-check-label template-customizer-t-layout_offcanvas"
                htmlFor="layoutRadios-offcanvas"></label>
            </div>
          </div> */}
          {/* <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="layoutRadios" id="layoutRadios-fixed_offcanvas"
                value="fixed-offcanvas" />
              <label className="form-check-label template-customizer-t-layout_fixed_offcanvas"
                htmlFor="layoutRadios-fixed_offcanvas"></label>
            </div>
          </div> */}
        </div>
      </div>

      {/* Header Options for Horizontal */}
      <div className="m-0 px-4 pb-3 template-customizer-headerOptions w-100">
        <label htmlFor="customizerHeader" className="form-label template-customizer-t-layout_header_label"></label>
        <div className="row px-1 template-customizer-header-options"></div>
      </div>

      {/* Fixed navbar */}
      <div className="m-0 px-4 pb-3 template-customizer-layoutNavbarOptions w-100">
        <label htmlFor="customizerNavbar" className="form-label template-customizer-t-layout_navbar_label"></label>
        <div className="row px-1 template-customizer-navbar-options"></div>
      </div>

      {/* Content */}
      <div className="m-0 px-4 pb-3 template-customizer-content w-100">
        <label htmlFor="customizerContent" className="form-label template-customizer-t-content_label"></label>
        <div className="row px-1 template-customizer-content-options"></div>
      </div>

      {/* Directions */}
      <div className="m-0 px-4 pb-3 template-customizer-directions w-100">
        <label htmlFor="customizerDirection" className="form-label template-customizer-t-direction_label"></label>
        <div className="row px-1 template-customizer-directions-options"></div>
      </div>
    </div>
    {/* Layout */}
  </div>
</div>
