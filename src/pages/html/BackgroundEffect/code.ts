const textCodeList = [
  `.box {
    background-image: repeating-linear-gradient(
        107deg,
        hsla(82, 0%, 5%, 0.15) 0px,
        hsla(82, 0%, 5%, 0.15) 0px,
        transparent 0px,
        transparent 1px,
        hsla(82, 0%, 5%, 0.15) 1px,
        hsla(82, 0%, 5%, 0.15) 3px,
        transparent 3px,
        transparent 4px,
        hsla(82, 0%, 5%, 0.15) 4px,
        hsla(82, 0%, 5%, 0.15) 7px
      ),
      repeating-linear-gradient(
        191deg,
        hsla(82, 0%, 5%, 0.15) 0px,
        hsla(82, 0%, 5%, 0.15) 0px,
        transparent 0px,
        transparent 1px,
        hsla(82, 0%, 5%, 0.15) 1px,
        hsla(82, 0%, 5%, 0.15) 3px,
        transparent 3px,
        transparent 4px,
        hsla(82, 0%, 5%, 0.15) 4px,
        hsla(82, 0%, 5%, 0.15) 7px
      ),
      repeating-linear-gradient(
        0deg,
        hsla(82, 0%, 5%, 0.15) 0px,
        hsla(82, 0%, 5%, 0.15) 0px,
        transparent 0px,
        transparent 1px,
        hsla(82, 0%, 5%, 0.15) 1px,
        hsla(82, 0%, 5%, 0.15) 3px,
        transparent 3px,
        transparent 4px,
        hsla(82, 0%, 5%, 0.15) 4px,
        hsla(82, 0%, 5%, 0.15) 7px
      ),
      repeating-linear-gradient(
        90deg,
        hsla(82, 0%, 5%, 0.15) 0px,
        hsla(82, 0%, 5%, 0.15) 0px,
        transparent 0px,
        transparent 1px,
        hsla(82, 0%, 5%, 0.15) 1px,
        hsla(82, 0%, 5%, 0.15) 3px,
        transparent 3px,
        transparent 4px,
        hsla(82, 0%, 5%, 0.15) 4px,
        hsla(82, 0%, 5%, 0.15) 7px
      ),
      linear-gradient(90deg, rgb(45, 45, 45), rgb(45, 45, 45));
  }`,
  `.box {
    background-color: #fff;
    background-image: linear-gradient(
        90deg,
        rgba(66, 66, 66, 0.5) 50%,
        transparent 0
      );
    background-size: 50px 100%;
  }`,
  `.box {
    background-color: #fff;
    background-image: linear-gradient(rgba(66, 66, 66, 0.5) 50%, transparent 0),
        linear-gradient(to right, rgba(66, 66, 66, 0.5) 50%, transparent 0);
    background-size: 50px 50px;
  }`,
  `.box {
    background-color: #fff;
    background-image: repeating-linear-gradient(
        60deg,
        rgba(66, 66, 66, 0.5) 5%,
        transparent 0 10%,
        rgba(66, 66, 66, 0.5) 0 15%
      );
  }`,
  `.box {
    background-color: #fff;
    background-image: repeating-linear-gradient(
        60deg,
        rgba(66, 66, 66, 0.5) 5%,
        transparent 10%,
        rgba(66, 66, 66, 0.5) 15%
      );
    background-size: 50px 50px;
  }`,
  `.box {
    background-color: #55f;
    background-image: linear-gradient(#fff 2px, transparent 0),
        linear-gradient(to right, #fff 2px, transparent 0),
        linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 0),
        linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 0);
    background-size: 60px 60px, 60px 60px, 20px 20px, 20px 20px;
  }`,
  `.box {
    background: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 25%,
        #f55 0,
        #f55 50%
      ),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 25%,
        #55f 0,
        #55f 50%
      ),
      #efb;
    background-size: 200px 200px;
    background-blend-mode: multiply;
  }`,
  `.box {
    background-image: repeating-conic-gradient(#000 0 5%, #fff 5% 10%);
  }`,
  `.box {
    background-color: #fff;
    background-image: repeating-conic-gradient(#000 0 1%, #0000 0 2%);
  }`,
  `.box {
    background-image: repeating-conic-gradient(
      red 0deg 30deg,
      yellow 30deg 60deg,
      blue 60deg 90deg
    );
  }`,
  `.box {
    background: repeating-radial-gradient(#000 0 0.0001%, #fff 0 0.0002%) 60%
        60%/1000px 1000px,
      repeating-conic-gradient(#000 0 0.0001%, #fff 0 0.0002%) 40% 40%/1000px
        1000px;
    background-blend-mode: difference;
  }`,
  `.box {
    background: repeating-conic-gradient(#bf4d28 0 0.00005%, #e1f5c4 0 0.00017%)
      0 0/5000px 4000px;
  }`,
  `.box {
    background: linear-gradient(
        90deg,
        transparent 60px - 1px,
        #aec8ee 1px
      ),
      linear-gradient(180deg, transparent 60px - 1px, #aec8ee 1px),
      conic-gradient(
        from 270deg at 5px 5px * 4,
        #31c2ec 90deg,
        transparent 0deg
      ),
      conic-gradient(
        from 270deg at 5px * 4 5px,
        #31c2ec 90deg,
        transparent 0deg
      ),
      #0e284d;
    background-size: 60px 100%, 100% 60px, 60px 60px,
      60px 60px;
    background-position: 0 0, 0 0, calc(5px / -2) calc(5px * -2),
      calc(5px * -2) calc(5px / -2);
  }`,
  `.box {
    background: linear-gradient(
        90deg,
        transparent 60px - 1px,
        #aec8ee 1px
      ),
      linear-gradient(180deg, transparent 60px - 1px, #aec8ee 1px),
      radial-gradient(
        closest-side at 7px 7px,
        #31c2ec 0,
        #31c2ec 7px,
        transparent 7px,
        transparent 100%
      ),
      #0e284d;
    background-size: 60px 100%, 100% 60px, 60px 60px;
    background-position: 0 0, 0 0,
      calc(7px * -1 - 1px) calc(7px * -1 - 1px);
  }`,
  `.box {
    background: linear-gradient(#0000 50%, #0004 0),
      conic-gradient(from -30deg at 90%, #fff 240deg, #0000 0),
      conic-gradient(from -30deg at 75%, #71e9a0 240deg, #0000 0),
      conic-gradient(from -30deg at 25%, #0000 240deg, #fff 0),
      conic-gradient(from -30deg at 40%, #fff 240deg, #2a6a9b 0);
    background-size: calc(1.5 * 84px) 84px;
  }`,
  `.box {
    background: linear-gradient(-45deg, #0000 75%, #f67280 0),
      linear-gradient(45deg, #0000 75%, #f67280 0) 0 calc(70px / 2) #355c7d;
    background-size: 70px 70px;
  }`,
  `.box {
    background: linear-gradient(
          225deg,
          #0000 3.125%,
          #987f69 0 9.375%,
          #0000 0 78.125%,
          #987f69 0 84.375%,
          #0000 0
        )
        0 calc(12px / 2),
      linear-gradient(45deg, #fdf1cc 3.125%, #987f69 0 9.375%, #fdf1cc 0 15.625%, #987f69 0 21.875%,
      #fdf1cc 0 28.125%, #0000 0) 0 12px,
      linear-gradient(45deg, #fdf1cc 3.125%, #987f69 0 9.375%, #fdf1cc 0 15.625%, #987f69 0 21.875%,
      #fdf1cc 0 28.125%, #0000 0) calc(12px / -2) calc(12px / -2),
      linear-gradient(225deg, #fdf1cc 3.125%, #987f69 0 9.375%, #fdf1cc 0 15.625%, #987f69 0 21.875%,
      #fdf1cc 0 28.125%, #0000 0) 12px 0,
      linear-gradient(225deg, #fdf1cc 3.125%, #987f69 0 9.375%, #fdf1cc 0 15.625%, #987f69 0 21.875%,
      #fdf1cc 0 28.125%, #0000 0) calc(12px / 2) 12px,
      repeating-linear-gradient(
        -45deg,
        #fdf1cc -3.125% 3.125%,
        #987f69 0 9.375%
      );
    background-size: calc(2 * 12px) calc(2 * 12px);
  }`,
  `.box {
    background: repeating-linear-gradient(
        60deg,
        rgba(255, 255, 255, 0.2) 0,
        rgba(255, 255, 255, 0.2) 2px,
        black 2px,
        black 3px,
        transparent 3px,
        transparent 20px
      ),
      repeating-linear-gradient(
        300deg,
        black 0,
        black 1px,
        rgba(255, 255, 255, 0.2) 1px,
        rgba(255, 255, 255, 0.2) 3px,
        transparent 3px,
        transparent 20px
      ),
      linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(64, 64, 64, 0.2) 15%,
        rgba(77, 77, 77, 0.2) 40%,
        rgba(38, 38, 38, 0.2) 60%,
        rgba(26, 26, 26, 0.2) 80%,
        rgba(3, 3, 3, 0.2) 100%
      ),
      linear-gradient(
        180deg,
        hsl(210, 35%, 30%) 0,
        hsl(220, 45%, 20%) 35%,
        hsl(235, 45%, 15%) 65%,
        hsl(210, 50%, 5%) 100%
      );
  }`,
  `.box {
    background: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5) 0,
        rgba(255, 255, 255, 0.2) 2px,
        rgba(0, 0, 0, 0.2) 2px,
        rgba(0, 0, 0, 0.5) 10px,
        rgba(255, 255, 255, 0.25) 10px,
        rgba(255, 255, 255, 0.3) 10px,
        transparent 11px,
        transparent 25px
      ),
      linear-gradient(
        135deg,
        hsla(200, 15%, 35%, 0.25) 0%,
        hsla(215, 10%, 60%, 0.25) 15%,
        hsla(200, 35%, 65%, 0.25) 40%,
        hsla(0, 0%, 50%, 0.25) 60%,
        hsla(205, 5%, 45%, 0.25) 80%,
        hsla(195, 30%, 36%, 0.25) 100%
      ),
      linear-gradient(
        135deg,
        hsla(90, 5%, 15%, 0.5) 0,
        hsla(90, 25%, 20%, 0.5) 0%,
        hsla(105, 10%, 45%, 0.5) 30%,
        hsla(105, 10%, 35%, 0.5) 50%,
        hsla(95, 5%, 45%, 0.5) 70%,
        hsla(90, 15%, 30%, 0.5) 100%
      ),
      linear-gradient(
        180deg,
        hsl(210, 35%, 35%) 0,
        hsl(220, 45%, 25%) 35%,
        hsl(235, 45%, 20%) 65%,
        hsl(210, 50%, 10%) 100%
      );
  }`,
  `.box {
    background: repeating-linear-gradient(
        -1deg,
        rgba(0, 0, 0, 0.1) 0,
        rgba(0, 0, 0, 0.1) 1px,
        rgba(255, 255, 255, 0.1) 1px,
        rgba(255, 255, 255, 0.1) 2px,
        transparent 2px,
        transparent 10px
      ),
      repeating-linear-gradient(
        1deg,
        transparent 0,
        transparent 7px,
        rgba(255, 255, 255, 0.1) 7px,
        rgba(255, 255, 255, 0.1) 8px
      ),
      repeating-linear-gradient(
        0deg,
        transparent 0,
        transparent 12px,
        rgba(255, 255, 255, 0.2) 12px,
        rgba(255, 255, 255, 0.1) 13px
      ),
      repeating-linear-gradient(
        0deg,
        transparent 0,
        transparent 17px,
        rgba(0, 0, 0, 0.4) 17px,
        rgba(0, 0, 0, 0.4) 18px
      ),
      linear-gradient(
        135deg,
        hsla(200, 25%, 15%, 0.5) 0,
        hsla(200, 45%, 20%, 0.5) 0%,
        hsla(215, 30%, 45%, 0.5) 30%,
        hsla(215, 30%, 35%, 0.5) 50%,
        hsla(205, 25%, 45%, 0.5) 70%,
        hsla(200, 35%, 30%, 0.5) 100%
      ),
      linear-gradient(
        180deg,
        hsl(220, 5%, 35%) 0,
        hsl(230, 15%, 25%) 35%,
        hsl(245, 15%, 20%) 65%,
        hsl(220, 20%, 10%) 100%
      );
  }`,
  `.box {
    background: repeating-linear-gradient(
        -1deg,
        rgba(0, 0, 0, 0.1) 0,
        rgba(0, 0, 0, 0.1) 1px,
        rgba(255, 255, 255, 0.1) 1px,
        rgba(255, 255, 255, 0.1) 2px,
        transparent 2px,
        transparent 10px
      ),
      repeating-linear-gradient(
        1deg,
        transparent 0,
        transparent 7px,
        rgba(255, 255, 255, 0.1) 7px,
        rgba(255, 255, 255, 0.1) 8px
      ),
      repeating-linear-gradient(
        0deg,
        transparent 0,
        transparent 12px,
        rgba(255, 255, 255, 0.2) 12px,
        rgba(255, 255, 255, 0.1) 13px
      ),
      repeating-linear-gradient(
        0deg,
        transparent 0,
        transparent 17px,
        rgba(0, 0, 0, 0.4) 17px,
        rgba(0, 0, 0, 0.4) 18px
      ),
      linear-gradient(
        135deg,
        hsl(210, 45%, 35%) 0,
        hsl(215, 65%, 35%) 0%,
        hsl(210, 55%, 45%) 25%,
        hsl(215, 45%, 40%) 50%,
        hsl(205, 60%, 35%) 75%,
        hsl(210, 45%, 30%) 100%
      );
  }`,
  `.box {
    background: radial-gradient(
        circle farthest-side at 50% 50%,
        hsl(60, 15%, 15%) 0,
        hsl(60, 15%, 15%) 15%,
        transparent 15%,
        transparent 100%
      ),
      radial-gradient(
        circle farthest-side at 50% 50%,
        hsl(60, 15%, 15%) 0,
        hsl(60, 15%, 15%) 15%,
        transparent 15%,
        transparent 100%
      ),
      radial-gradient(
        circle farthest-side at 50% 50%,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 15%,
        transparent 15%,
        transparent 100%
      ),
      radial-gradient(
        circle farthest-side at 50% 50%,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 15%,
        transparent 15%,
        transparent 100%
      ),
      linear-gradient(
        145deg,
        hsla(60, 15%, 15%, 0.5) 0%,
        hsla(75, 10%, 40%, 0.5) 15%,
        hsla(60, 35%, 45%, 0.5) 40%,
        hsla(0, 0%, 30%, 0.5) 60%,
        hsla(65, 5%, 25%, 0.5) 80%,
        hsla(55, 30%, 16%, 0.5) 100%
      ),
      linear-gradient(
        50deg,
        hsl(60, 15%, 15%) 0,
        hsl(65, 25%, 20%) 10%,
        hsl(70, 20%, 30%) 25%,
        hsl(60, 25%, 15%) 40%,
        hsl(65, 15%, 30%) 60%,
        hsl(70, 25%, 15%) 70%,
        hsl(65, 30%, 20%) 90%,
        hsl(60, 40%, 15%) 100%
      );
    background-size: 40px 40px, 40px 40px, 40px 40px, 40px 40px, 100% 100%,
      100% 100%;
    background-position: 0 0, 20px 20px, 0 -2px, 20px 22px, 0 0, 0 0;
  }`,
  `.box {
    background: linear-gradient(
        120deg,
        hsla(0, 80%, 20%, 0.5) 0%,
        hsla(5, 100%, 30%, 0.5) 15%,
        hsla(10, 100%, 35%, 0.5) 25%,
        hsla(15, 100%, 50%, 0.5) 35%,
        hsla(20, 95%, 40%, 0.5) 40%,
        hsla(10, 85%, 35%, 0.5) 50%,
        hsla(5, 85%, 30%, 0.5) 65%,
        hsla(5, 85%, 30%, 0.5) 70%,
        hsla(0, 95%, 25%, 0.5) 85%,
        hsla(0, 100%, 20%, 0.5) 100%
      ),
      linear-gradient(
        60deg,
        hsla(0, 70%, 5%, 0.5) 0,
        hsla(5, 80%, 10%, 0.5) 10%,
        hsla(10, 75%, 20%, 0.5) 25%,
        hsla(0, 80%, 5%, 0.5) 40%,
        hsla(5, 70%, 20%, 0.5) 60%,
        hsla(10, 80%, 5%, 0.5) 70%,
        hsla(5, 85%, 10%, 0.5) 90%,
        hsla(0, 95%, 5%, 0.5) 100%
      ),
      linear-gradient(
        120deg,
        hsl(0, 0%, 20%) 0,
        hsl(220, 5%, 10%) 35%,
        hsl(235, 5%, 5%) 65%,
        hsl(0, 0%, 0%) 100%
      );
  }`,
  `.box {
    background: radial-gradient(
        ellipse 150% 150% at 80% 80%,
        transparent 40%,
        rgba(255, 255, 255, 0.25) 60%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 150% 150% at 20% 20%,
        transparent 40%,
        rgba(0, 0, 0, 0.25) 60%,
        transparent 100%
      ),
      radial-gradient(
        ellipse 100% 100% at 50% 50%,
        transparent 25%,
        rgba(0, 0, 0, 0.5) 75%
      ),
      linear-gradient(
        100deg,
        hsla(0, 50%, 25%, 0.25) 0%,
        hsla(5, 75%, 35%, 0.25) 15%,
        hsla(10, 75%, 40%, 0.25) 25%,
        hsla(15, 75%, 55%, 0.25) 35%,
        hsla(20, 65%, 45%, 0.25) 40%,
        hsla(10, 55%, 40%, 0.25) 50%,
        hsla(5, 55%, 35%, 0.25) 65%,
        hsla(5, 55%, 35%, 0.25) 70%,
        hsla(0, 65%, 30%, 0.25) 85%,
        hsla(0, 75%, 25%, 0.25) 100%
      ),
      linear-gradient(
        180deg,
        hsla(210, 15%, 20%, 0.5) 0,
        hsla(220, 25%, 10%, 0.5) 35%,
        hsla(235, 25%, 5%, 0.5) 65%,
        hsla(0, 0%, 0%, 0.5) 100%
      ),
      linear-gradient(
        180deg,
        hsl(200, 80%, 30%) 0%,
        hsl(195, 70%, 45%) 7%,
        hsl(180, 80%, 70%) 25%,
        hsl(180, 100%, 60%) 35%,
        hsl(190, 70%, 55%) 55%,
        hsl(195, 100%, 35%) 75%,
        hsl(200, 85%, 25%) 100%
      );
  }`,
  `.box {
    background: radial-gradient(farthest-side at -33.33% 50%, #0000 52%, #170409 54% 57%, #0000 59%) 0
        calc(100px / 2),
      radial-gradient(farthest-side at 50% 133.33%, #0000 52%, #170409 54% 57%, #0000 59%) calc(100px / 2) 0,
      radial-gradient(farthest-side at 133.33% 50%, #0000 52%, #170409 54% 57%, #0000 59%),
      radial-gradient(farthest-side at 50% -33.33%, #0000 52%, #170409 54% 57%, #0000 59%), #67917a;
    background-size: calc(100px / 4.667) 100px, 100px calc(100px / 4.667);
  }`,
  `.box {
    background: conic-gradient(
          at 20px calc(100% - 20px),
          #0000 270deg,
          #c02942 0
        )
        calc(20px + 15px) 0,
      linear-gradient(#53777a 20px, #0000 0) 0 15px,
      conic-gradient(
        at 20px calc(100% - 20px),
        #0000 90deg,
        #53777a 0 180deg,
        #c02942 0
      ),
      #ecd078;
    background-size: calc(2 * (20px + 15px)) calc(2 * (20px + 15px));
  }`,
  `.box {
    background: conic-gradient(at 62.5% 12.5%, #72e21f 25%, #0000 0) calc(40px / -8) calc(40px / 2),
      conic-gradient(at 62.5% 12.5%, #72e21f 25%, #0000 0) calc(-3 * 40px/8) calc(40px / 4), conic-gradient(at 87.5% 62.5%, #72e21f 25%, #0000 0) calc(3 * 40px/8) calc(40px / 4),
      conic-gradient(at 87.5% 62.5%, #72e21f 25%, #0000 0) calc(40px / -8) 0, conic-gradient(at 25% 12.5%, #72e21f 25%, #0000 0) 0 calc(40px / -4), conic-gradient(at 25% 12.5%, #72e21f 25%, #0000 0) calc(40px / -4) 0,
      conic-gradient(at 87.5% 87.5%, #72e21f 25%, #0000 0) calc(40px / 8) 0 #044012;
    background-size: 40px 40px;
  }`,
  `.box {
    background: radial-gradient(27% 29% at right, #0000 83%, #b09f79 85% 99%, #0000 101%) calc(20px / 2) 20px,
      radial-gradient(27% 29% at left, #0000 83%, #b09f79 85% 99%, #0000 101%) calc(20px / -2) 20px,
      radial-gradient(29% 27% at top, #0000 83%, #b09f79 85% 99%, #0000 101%) 0 calc(20px / 2),
      radial-gradient(29% 27% at bottom, #0000 83%, #b09f79 85% 99%, #0000 101%) 0 calc(20px / -2) #476074;
    background-size: calc(2 * 20px) calc(2 * 20px);
  }`,
  `.box {
    background: radial-gradient(calc(2.414 * 12px) at 0 0, #0000 calc(100% - 12px / 3 - 1px), #615375 calc(100% - 12px / 3) calc(100% - 1px), #0000) calc(2.414 * 12px) calc(2.414 * 12px),
      radial-gradient(12px at 0 0, #0000 calc(100% - 12px / 3 - 1px), #615375 calc(100% - 12px / 3) calc(100% - 1px), #0000) calc(1.414 * 12px) calc(1.414 * 12px),
      radial-gradient(calc(2.414 * 12px) at 0 100%, #0000 calc(100% - 12px / 3 - 1px), #615375 calc(100% - 12px / 3) calc(100% - 1px), #0000) 0 calc(1.414 * 12px),
      radial-gradient(12px at 0 100%, #0000 calc(100% - 12px / 3 - 1px), #615375 calc(100% - 12px / 3) calc(100% - 1px), #0000) calc(-1 * 12px) calc(2.414 * 12px),
      radial-gradient(calc(2.414 * 12px) at 100% 0, #0000 calc(100% - 12px / 3 - 1px), #615375 calc(100% - 12px / 3) calc(100% - 1px), #0000) calc(1.414 * 12px) 0,
      radial-gradient(12px at 100% 0, #0000 calc(100% - 12px / 3 - 1px), #615375 calc(100% - 12px / 3) calc(100% - 1px), #0000) calc(2.414 * 12px) calc(-1 * 12px),
      radial-gradient(calc(2.414 * 12px) at 100% 100%, #0000 calc(100% - 12px / 3 - 1px), #615375 calc(100% - 12px / 3) calc(100% - 1px), #0000) calc(-1 * 12px) calc(-1 * 12px),
      radial-gradient(12px at 100% 100%, #0000 calc(100% - 12px / 3 - 1px), #615375 calc(100% - 12px / 3) calc(100% - 1px), #0000) #8eb2c5;
    background-size: calc(2 * calc(2.414 * 12px)) calc(2 * calc(2.414 * 12px));
  }`,
  `.box {
    background-image: repeating-radial-gradient(#f8f1f1ee 88%, #963fdd 90%);
    background-size: 50px 50px;
  }`,
  `.box {
    background: linear-gradient(
        45deg,
        transparent 33.33%,
        rgba(57, 144, 179, 0.1) 33.33%,
        rgba(0, 0, 0, 0.1) 66.66%,
        transparent 66.66%
      ),
      lightblue;
    background-size: 20px 20px;
  }`,
  `.box {
    background-image: repeating-radial-gradient(#f8f1f1ee 87%, #3fa7b4 90%);
    background-size: 50px 50px;
  }`,
  `.box {
    background: repeating-radial-gradient(red 55%, white 56%);
  }`,
  `.box {
    background-image: repeating-radial-gradient(
      #e2d1d1 50%,
      #e7d2d2ee 70%,
      #f5c7a1 95%
    );
    background-size: 50px 50px;
  }`,
];

export default textCodeList;
