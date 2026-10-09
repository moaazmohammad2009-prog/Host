class Lucky48HostEngine {
  constructor() {
    this.state = {
      lang: 'en',
      drawNumbers: null,
      drawTimestamp: null,
      lockedSlots: {},
      clientSlipsMap: {},
      selfBetsList: [],
      activeClientKey: null,
      payoutSliderVal: 30,
      zodiacConfig: {
        1: { zh: "鼠", en: "Rat", numbers: [1, 13, 25, 37] },
        2: { zh: "牛", en: "Ox", numbers: [2, 14, 26, 38] },
        3: { zh: "虎", en: "Tiger", numbers: [3, 15, 27, 39] },
        4: { zh: "兔", en: "Rabbit", numbers: [4, 16, 28, 40] },
        5: { zh: "龙", en: "Dragon", numbers: [5, 17, 29, 41] },
        6: { zh: "蛇", en: "Snake", numbers: [6, 18, 30, 42] },
        7: { zh: "马", en: "Horse", numbers: [7, 19, 31, 43] },
        8: { zh: "羊", en: "Goat", numbers: [8, 20, 32, 44] },
        9: { zh: "猴", en: "Monkey", numbers: [9, 21, 33, 45] },
        10: { zh: "鸡", en: "Rooster", numbers: [10, 22, 34, 46] },
        11: { zh: "狗", en: "Dog", numbers: [11, 23, 35, 47] },
        12: { zh: "猪", en: "Pig", numbers: [12, 24, 36, 48] }
      },
      rulesConfig: [
        { id: "TM", name_zh: "特码", name_en: "Special Number", category: "only_mn", ratio: 50.0 },
        { id: "TX", name_zh: "特肖", name_en: "Special Zodiac", category: "only_mn", ratio: 50.0 },
        { id: "TMDS", name_zh: "特码单双", name_en: "Special Odd/Even", category: "only_mn", ratio: 1.0 },
        { id: "DX", name_zh: "特码大小", name_en: "Special Big/Small", category: "only_mn", ratio: 1.0 },
        { id: "PTYX", name_zh: "平特一肖", name_en: "Flat Zodiac", category: "all_7", ratio: 1.0 },
        { id: "2LX", name_zh: "二连肖", name_en: "2 Zodiac Combo", category: "all_7", ratio: 3.0 },
        { id: "3LX", name_zh: "三连肖", name_en: "3 Zodiac Combo", category: "all_7", ratio: 10.0 },
        { id: "4LX", name_zh: "四连肖", name_en: "4 Zodiac Combo", category: "all_7", ratio: 300.0 },
        { id: "2Z2", name_zh: "二中二", name_en: "2 Numbers Combo", category: "first_6", ratio: 60.0 },
        { id: "3Z3", name_zh: "三中三", name_en: "3 Numbers Combo", category: "first_6", ratio: 600.0 },
        { id: "DP", name_zh: "单平/正码", name_en: "Regular Number", category: "first_6", ratio: 6.0 }
      ]
    };

    this.i18n = {
      zh: {
        brandTitle: "Lucky48 庄家总控与结算管理平台",
        brandSub: "HOST CONTROL & PAYOUT SETTLEMENT",
        btnLang: "Switch to English",
        openMobile: "打开手机端",
        tab1: "开奖生成与控盘",
        tab2: "汇总所有客户注单",
        tab3: "导入客户注单分标签",
        tab4: "庄家自投录单",
        tab5: "玩法概率与生肖设置",
        tab6: "报表结算与导出",
        statTotalIn: "总受注额 (Total Bet Pool)",
        statTargetPayout: "目标开奖赔付 (Target Payout)",
        statActualPayout: "本次实际赔付 (Actual Payout)",
        statHouseProfit: "庄家净盈亏 (House Net Profit)",
        engineTitle: "7个开奖号码控盘生成引擎 (1-48码 / 12生肖)",
        unlockAll: "解锁所有手选码",
        resetDraw: "重置开奖码",
        sliderTitle: "控盘目标赔付比例调节杆 (1-100 Level)",
        autoGen: "自动控盘生成 7 个号码",
        fairGen: "完全随机纯净生成",
        settleAll: "一键全盘开奖结算",
        settlePreview: "结算明细汇总预览",
        masterTableTitle: "全盘客户注单综合总表",
        exportCsv: "导出 CSV",
        exportJson: "导出 JSON",
        clientImportTitle: "客户注单文件导入",
        batchImport: "批量导入 (JSON/CSV)",
        clearData: "清空数据",
        selfInputTitle: "庄家直接手工录入注单",
        clientNameLbl: "客户姓名",
        gameTypeLbl: "玩法选择",
        betAmtLbl: "投注金额",
        addSelfBtn: "确认录入该注",
        rulesTitle: "玩法赔率设置",
        zodiacTitle: "12生肖设置",
        reportsTitle: "结算总报表",
        repTotalBet: "今日总受注额",
        repTotalPay: "今日总赔付额",
        repNetProfit: "庄家纯利润",
        fTotalCount: "总注数",
        fTotalBet: "总下注额",
        fHouseProfit: "庄家净利",
        systemActive: "System Active | Enterprise Engine v2.0",
        tableClient: "客户/设备",
        tableCount: "注数",
        tableTotalBet: "投注总额",
        tableWinTotal: "中奖总额",
        tableClientPL: "客户盈亏",
        tableHousePL: "庄家盈亏",
        tableWinRate: "中奖率",
        masterThSeq: "序号",
        masterThClient: "客户姓名",
        masterThDevice: "设备编号",
        masterThTime: "时间",
        masterThType: "玩法",
        masterThContent: "投注内容",
        masterThAmt: "投注额",
        masterThRatio: "赔率",
        masterThMaxBonus: "最高奖金",
        masterThResult: "结果",
        masterThPL: "盈亏",
        rulesThCode: "代码",
        rulesThName: "名称",
        rulesThCat: "类别",
        rulesThRatio: "赔率",
        zodiacThID: "ID",
        zodiacThZh: "中文",
        zodiacThEn: "英文",
        zodiacThNums: "号码",
        removeBtn: "删除",
        slotRegular: "正码",
        slotSpecial: "★ 特码",
        controlSliderLabel: "控盘档位",
        payoutRatioLabel: "赔付率",
        defaultClientName: "现场客户1",
        placeholderSelection: "输入投注内容 (如: 12 或 1,2,3)",
        noteMultiZodiac: "注：按住 Ctrl 或直接点击多选生肖组合"
      },
      en: {
        brandTitle: "Lucky48 Host Control & Settlement Platform",
        brandSub: "HOST CONTROL & PAYOUT SETTLEMENT",
        btnLang: "切换到中文",
        openMobile: "Open Mobile View",
        tab1: "Draw Generator & Control",
        tab2: "Master Bets Summary",
        tab3: "Client Slips Management",
        tab4: "Host Manual Entry",
        tab5: "Rules & Zodiac Config",
        tab6: "Reports & Settlement",
        statTotalIn: "Total Bet Pool",
        statTargetPayout: "Target Payout",
        statActualPayout: "Actual Payout",
        statHouseProfit: "House Net Profit",
        engineTitle: "7-Number Draw Control Engine (1-48 Balls / 12 Zodiacs)",
        unlockAll: "Unlock All Slots",
        resetDraw: "Reset Draw",
        sliderTitle: "Target Payout Ratio Slider (1-100 Level)",
        autoGen: "Auto-Generate Controlled Draw",
        fairGen: "Pure Random Fair Draw",
        settleAll: "One-Click Settlement",
        settlePreview: "Settlement Summary Preview",
        masterTableTitle: "Comprehensive Master Bets Table",
        exportCsv: "Export CSV",
        exportJson: "Export JSON",
        clientImportTitle: "Client Slips Import",
        batchImport: "Batch Import (JSON/CSV)",
        clearData: "Clear Data",
        selfInputTitle: "Host Direct Manual Slip Entry",
        clientNameLbl: "Client Name",
        gameTypeLbl: "Game Type",
        betAmtLbl: "Bet Amount",
        addSelfBtn: "Confirm & Add Slip",
        rulesTitle: "Rules & Odds Settings",
        zodiacTitle: "12 Zodiacs Configuration",
        reportsTitle: "Settlement Reports",
        repTotalBet: "Today Total Bets",
        repTotalPay: "Today Total Payouts",
        repNetProfit: "House Net Profit",
        fTotalCount: "Total Slips",
        fTotalBet: "Total Bet Amount",
        fHouseProfit: "House Net Profit",
        systemActive: "System Active | Enterprise Engine v2.0",
        tableClient: "Client / Device",
        tableCount: "Count",
        tableTotalBet: "Total Bet",
        tableWinTotal: "Total Payout",
        tableClientPL: "Client P/L",
        tableHousePL: "House P/L",
        tableWinRate: "Win Rate",
        masterThSeq: "No.",
        masterThClient: "Client Name",
        masterThDevice: "Device ID",
        masterThTime: "Time",
        masterThType: "Game Type",
        masterThContent: "Selection",
        masterThAmt: "Bet Amt",
        masterThRatio: "Ratio",
        masterThMaxBonus: "Max Bonus",
        masterThResult: "Result",
        masterThPL: "P/L",
        rulesThCode: "Code",
        rulesThName: "Name",
        rulesThCategory: "Category",
        rulesThRatio: "Ratio",
        zodiacThID: "ID",
        zodiacThZh: "Chinese",
        zodiacThEn: "English",
        zodiacThNums: "Numbers",
        removeBtn: "Remove",
        slotRegular: "Regular",
        slotSpecial: "★ Special",
        controlSliderLabel: "Control Level",
        payoutRatioLabel: "Payout Rate",
        defaultClientName: "Onsite Client 1",
        placeholderSelection: "Enter bet selection (e.g. 12 or 1,2,3)",
        noteMultiZodiac: "Note: Hold Ctrl or click to select multiple zodiacs"
      }
    };

    this.loadFromStorage();
    this.initDOM();
    this.bindEvents();
    this.settleAll();
  }

  loadFromStorage() {
    try {
      this.state.clientSlipsMap = {};
      this.state.selfBetsList = [];
      this.state.drawNumbers = null;
      this.state.drawTimestamp = null;

      const rawClientSlips = localStorage.getItem('lucky48_client_slips');
      if (rawClientSlips) {
        try {
          const parsedSlips = JSON.parse(rawClientSlips);
          if (parsedSlips && typeof parsedSlips === 'object') {
            Object.keys(parsedSlips).forEach(deviceId => {
              const slip = parsedSlips[deviceId];
              if (slip && Array.isArray(slip.bets) && slip.bets.length > 0) {
                const actualDeviceId = slip.deviceId || slip.device_id || deviceId;
                this.groupBetsByClientName(slip.bets, slip.clientName || slip.client_name || actualDeviceId)
                  .forEach((bets, clientName) => {
                    const key = JSON.stringify([actualDeviceId, clientName]);
                    this.state.clientSlipsMap[key] = {
                      ...slip,
                      clientName,
                      deviceId: actualDeviceId,
                      bets
                    };
                  });
              }
            });
          }
        } catch (err) {}
      }

      const rawSelf = localStorage.getItem('lucky48_self_bets');
      if (rawSelf) {
        try {
          const parsedSelf = JSON.parse(rawSelf);
          if (Array.isArray(parsedSelf)) this.state.selfBetsList = parsedSelf;
        } catch (err) {}
      }

      const rawZodiac = localStorage.getItem('lucky48_zodiac_config');
      if (rawZodiac) {
        try {
          const parsedZodiac = JSON.parse(rawZodiac);
          if (parsedZodiac && typeof parsedZodiac === 'object') {
            this.state.zodiacConfig = parsedZodiac;
          }
        } catch (err) {}
      }

      const rawDraw = localStorage.getItem('lucky48_draw_numbers');
      const rawDrawTimestamp = localStorage.getItem('lucky48_draw_timestamp');
      if (rawDraw) {
        try {
          const parsedDraw = JSON.parse(rawDraw);
          if (this.isValidDraw(parsedDraw) && Number.isFinite(Date.parse(rawDrawTimestamp || ''))) {
            this.state.drawNumbers = parsedDraw;
            this.state.drawTimestamp = rawDrawTimestamp;
          }
        } catch (err) {}
      }
    } catch (e) {}
  } 

  saveToStorage() {
    try {
      localStorage.setItem('lucky48_self_bets', JSON.stringify(this.state.selfBetsList));
      localStorage.setItem('lucky48_client_slips', JSON.stringify(this.state.clientSlipsMap));
      localStorage.setItem('lucky48_zodiac_config', JSON.stringify(this.state.zodiacConfig));
      if (this.hasPublishedDraw()) {
        localStorage.setItem('lucky48_draw_numbers', JSON.stringify(this.state.drawNumbers));
        localStorage.setItem('lucky48_draw_timestamp', this.state.drawTimestamp);
      } else {
        localStorage.removeItem('lucky48_draw_numbers');
        localStorage.removeItem('lucky48_draw_timestamp');
      }
    } catch (e) {}
  }

  t(key) {
    return this.i18n[this.state.lang][key] || key;
  }

  getZodiac(num) { return ((num - 1) % 12) + 1; }

  isValidDraw(draw) {
    return Array.isArray(draw)
      && draw.length === 7
      && draw.every(num => Number.isInteger(num) && num >= 1 && num <= 48)
      && new Set(draw).size === 7;
  }

  hasPublishedDraw() {
    return this.isValidDraw(this.state.drawNumbers)
      && Number.isFinite(Date.parse(this.state.drawTimestamp || ''));
  }

  publishDraw(draw) {
    this.state.drawNumbers = draw;
    this.state.drawTimestamp = new Date().toISOString();
    this.saveToStorage();
    this.settleAll();
  }

  getZodiacName(zId) {
    const z = this.state.zodiacConfig[zId];
    if (!z) return zId;
    return this.state.lang === 'zh' ? z.zh : z.en;
  }

  formatSelectionDisplay(bType, sel) {
    const numVal = parseInt(sel, 10);
    if (!isNaN(numVal) && numVal >= 1 && numVal <= 48 && (bType === 'TM' || bType === 'DP')) {
      const zId = this.getZodiac(numVal);
      const zObj = this.state.zodiacConfig[zId];
      const zName = zObj ? (this.state.lang === 'zh' ? zObj.zh : zObj.en) : '';
      return `${numVal} <span style="font-size:11px; color:var(--text-muted);">(${zName})</span>`;
    }

    if (bType === 'TX' || bType === 'PTYX') {
      const zId = parseInt(sel, 10);
      const zObj = this.state.zodiacConfig[zId];
      return zObj ? (this.state.lang === 'zh' ? zObj.zh : zObj.en) : sel;
    }

    if (Array.isArray(sel)) {
      if (bType === 'TX' || bType === 'PTYX' || bType.includes('LX')) {
        return sel.map(zId => this.getZodiacName(zId)).join(', ');
      }
      return sel.join(', ');
    }
    return sel;
  }

  getAllBets() {
    let bets = [...this.state.selfBetsList];
    Object.values(this.state.clientSlipsMap).forEach(c => {
      if (!c) return;
      if (Array.isArray(c.bets)) {
        bets = bets.concat(c.bets);
      } else if (Array.isArray(c)) {
        bets = bets.concat(c);
      }
    });
    return bets;
  }

  initDOM() {
    const dateInput = document.getElementById('host-draw-date');
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
    this.renderBallSlots();
    this.initSelfInputUI();
  }

  bindEvents() {
    const navTabs = document.getElementById('main-nav-tabs');
    if (navTabs) {
      navTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-tab-btn');
        if (!btn) return;
        document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetPane = document.getElementById(btn.dataset.tab);
        if (targetPane) targetPane.classList.add('active');
      });
    }

    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
      btnLang.addEventListener('click', () => {
        this.state.lang = this.state.lang === 'zh' ? 'en' : 'zh';
        this.applyTranslations();
        this.renderAll();
      });
    }

    const slider = document.getElementById('payout-slider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        this.state.payoutSliderVal = parseInt(e.target.value);
        const disp = document.getElementById('slider-display-val');
        if (disp) disp.innerText = `${this.state.payoutSliderVal}%`;
        this.updateMetrics();
      });
    }

    const runGen = document.getElementById('btn-run-gen');
    if (runGen) runGen.addEventListener('click', () => this.generateOptimizedDraw());

    const runFair = document.getElementById('btn-run-fair');
    if (runFair) runFair.addEventListener('click', () => this.generateFairDraw());

    const settleAllBtn = document.getElementById('btn-settle-all');
    if (settleAllBtn) settleAllBtn.addEventListener('click', () => this.settleAll());

    const resetDraw = document.getElementById('btn-reset-draw');
    if (resetDraw) {
      resetDraw.addEventListener('click', () => {
        this.state.drawNumbers = null;
        this.state.drawTimestamp = null;
        this.saveToStorage();
        this.settleAll();
      });
    }

    const unlockAll = document.getElementById('btn-unlock-all');
    if (unlockAll) {
      unlockAll.addEventListener('click', () => {
        this.state.lockedSlots = {};
        this.renderBallSlots();
      });
    }

    const triggerUpload = document.getElementById('btn-trigger-upload');
    const batchFile = document.getElementById('host-batch-file');
    if (triggerUpload && batchFile) {
      triggerUpload.addEventListener('click', () => batchFile.click());
      batchFile.addEventListener('change', (e) => this.handleBatchUpload(e));
    }

    const clearClients = document.getElementById('btn-clear-clients');
    if (clearClients) {
      clearClients.addEventListener('click', () => {
        if (confirm(this.state.lang === 'zh' ? '是否确定清空客户数据？' : 'Are you sure to clear client data?')) {
          this.state.clientSlipsMap = {};
          this.state.selfBetsList = [];
          this.state.activeClientKey = null;
          this.saveToStorage();
          this.settleAll();
        }
      });
    }

    const addSelfBetBtn = document.getElementById('btn-add-self-bet');
    if (addSelfBetBtn) addSelfBetBtn.addEventListener('click', () => this.addSelfBet());

    const selfGameType = document.getElementById('host-self-gametype');
    if (selfGameType) {
      selfGameType.addEventListener('change', () => this.renderSelfPickArea());
    }

    const exportCsvBtn = document.getElementById('btn-export-csv');
    if (exportCsvBtn) {
      exportCsvBtn.addEventListener('click', () => this.exportCSV());
    }

    const exportJsonBtn = document.getElementById('btn-export-json');
    if (exportJsonBtn) {
      exportJsonBtn.addEventListener('click', () => this.exportJSON());
    }

    window.addEventListener('storage', () => {
      this.loadFromStorage();
      this.settleAll();
    });
  }

  applyTranslations() {
    const brandTitleEl = document.querySelector('.brand div div:nth-child(1)');
    if (brandTitleEl) brandTitleEl.innerText = this.t('brandTitle');

    const brandSubEl = document.querySelector('.brand div div:nth-child(2)');
    if (brandSubEl) brandSubEl.innerText = this.t('brandSub');

    const btnLang = document.getElementById('btn-lang');
    if (btnLang) btnLang.innerText = this.t('btnLang');

    const mobileLink = document.querySelector('header a.btn-gold span');
    if (mobileLink) mobileLink.innerText = this.t('openMobile');

    const tabs = document.querySelectorAll('.nav-tab-btn');
    const tabKeys = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6'];
    tabs.forEach((tab, idx) => {
      const span = tab.querySelector('span');
      if (span && tabKeys[idx]) {
        span.innerText = this.t(tabKeys[idx]);
      }
    });

    const statTitles = document.querySelectorAll('.stat-box .title');
    if (statTitles.length >= 4) {
      statTitles[0].innerText = this.t('statTotalIn');
      statTitles[1].innerText = this.t('statTargetPayout');
      statTitles[2].innerText = this.t('statActualPayout');
      statTitles[3].innerText = this.t('statHouseProfit');
    }

    const engineTitle = document.querySelector('#tab-draw-gen .card:nth-child(2) .card-title span');
    if (engineTitle) engineTitle.innerText = this.t('engineTitle');

    const btnUnlock = document.getElementById('btn-unlock-all');
    if (btnUnlock) btnUnlock.innerText = this.t('unlockAll');

    const btnReset = document.getElementById('btn-reset-draw');
    if (btnReset) btnReset.innerText = this.t('resetDraw');

    const sliderStrong = document.querySelector('.slider-box strong');
    if (sliderStrong) sliderStrong.innerText = this.t('sliderTitle');

    const btnRunGen = document.getElementById('btn-run-gen');
    if (btnRunGen) btnRunGen.innerText = this.t('autoGen');

    const btnRunFair = document.getElementById('btn-run-fair');
    if (btnRunFair) btnRunFair.innerText = this.t('fairGen');

    const btnSettleAll = document.getElementById('btn-settle-all');
    if (btnSettleAll) btnSettleAll.innerText = this.t('settleAll');

    const settlePrevCard = document.querySelector('#tab-draw-gen .card:nth-child(3) .card-title');
    if (settlePrevCard) settlePrevCard.innerText = this.t('settlePreview');

    const masterTitle = document.querySelector('#tab-combined .card-title span');
    if (masterTitle) masterTitle.innerText = this.t('masterTableTitle');

    const exportCsv = document.getElementById('btn-export-csv');
    if (exportCsv) exportCsv.innerText = this.t('exportCsv');

    const exportJson = document.getElementById('btn-export-json');
    if (exportJson) exportJson.innerText = this.t('exportJson');

    const clientImportTitle = document.querySelector('#tab-clients .card-title span');
    if (clientImportTitle) clientImportTitle.innerText = this.t('clientImportTitle');

    const btnTriggerUpload = document.getElementById('btn-trigger-upload');
    if (btnTriggerUpload) btnTriggerUpload.innerText = this.t('batchImport');

    const btnClearClients = document.getElementById('btn-clear-clients');
    if (btnClearClients) btnClearClients.innerText = this.t('clearData');

    const selfInputTitle = document.querySelector('#tab-self .card-title');
    if (selfInputTitle) selfInputTitle.innerText = this.t('selfInputTitle');

    const selfLabels = document.querySelectorAll('#tab-self label');
    if (selfLabels.length >= 3) {
      selfLabels[0].innerText = this.t('clientNameLbl');
      selfLabels[1].innerText = this.t('gameTypeLbl');
      selfLabels[2].innerText = this.t('betAmtLbl');
    }

    const selfClientInput = document.getElementById('host-self-client');
    if (selfClientInput) selfClientInput.value = this.t('defaultClientName');

    const btnAddSelf = document.getElementById('btn-add-self-bet');
    if (btnAddSelf) btnAddSelf.innerText = this.t('addSelfBtn');

    const ruleCards = document.querySelectorAll('#tab-rules .card');
    if (ruleCards.length >= 2) {
      ruleCards[0].querySelector('.card-title').innerText = this.t('rulesTitle');
      ruleCards[1].querySelector('.card-title').innerText = this.t('zodiacTitle');
    }

    const reportCardTitle = document.querySelector('#tab-reports .card-title');
    if (reportCardTitle) reportCardTitle.innerText = this.t('reportsTitle');

    const repTitles = document.querySelectorAll('#tab-reports .stat-box .title');
    if (repTitles.length >= 3) {
      repTitles[0].innerText = this.t('repTotalBet');
      repTitles[1].innerText = this.t('repTotalPay');
      repTitles[2].innerText = this.t('repNetProfit');
    }

    const footerLabels = document.querySelectorAll('footer span');
    if (footerLabels.length >= 3) {
      footerLabels[0].innerText = this.t('fTotalCount');
      footerLabels[1].innerText = this.t('fTotalBet');
      footerLabels[2].innerText = this.t('fHouseProfit');
    }

    const footerSystem = document.querySelector('footer div:last-child');
    if (footerSystem) footerSystem.innerText = this.t('systemActive');

    this.initSelfInputUI();
    this.renderBallSlots();
  }

  renderBallSlots() {
    const container = document.getElementById('draw-slots-container');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 7; i++) {
      const isMn = (i === 6);
      const isLocked = (i in this.state.lockedSlots);
      const num = isLocked ? this.state.lockedSlots[i] : (this.state.drawNumbers ? this.state.drawNumbers[i] : '?');

      const slotDiv = document.createElement('div');
      slotDiv.className = 'ball-slot';
      slotDiv.innerHTML = `
        <div class="ball-slot-num ${isMn ? 'mn' : ''} ${isLocked ? 'locked' : ''}" data-slot="${i}">${num}</div>
        <div style="font-size:11px; color:var(--text-muted); font-weight:600;">${isMn ? this.t('slotSpecial') : `${this.t('slotRegular')}${i + 1}`}</div>
      `;
      slotDiv.querySelector('.ball-slot-num').addEventListener('click', () => this.promptLockSlot(i));
      container.appendChild(slotDiv);
    }
  }

  promptLockSlot(idx) {
    const current = this.state.lockedSlots[idx] || '';
    const msg = this.state.lang === 'zh' ? '请输入锁定号码 (1-48)，留空取消：' : 'Enter lock number (1-48), leave blank to cancel:';
    const input = prompt(msg, current);
    if (input === null || input.trim() === '') {
      delete this.state.lockedSlots[idx];
    } else {
      const val = parseInt(input.trim());
      if (isNaN(val) || val < 1 || val > 48) {
        alert(this.state.lang === 'zh' ? '请输入 1-48 之间的有效数字' : 'Please enter a valid number between 1 and 48');
        return;
      }
      this.state.lockedSlots[idx] = val;
    }
    this.renderBallSlots();
  }

  generateOptimizedDraw() {
    const allBets = this.getAllBets();
    const totalPool = allBets.reduce((sum, b) => sum + (b.bet_amount || b.bet_unit || 0), 0);
    const targetPayout = totalPool * (this.state.payoutSliderVal / 100);

    const lockedVals = new Set(Object.values(this.state.lockedSlots));
    const availablePool = Array.from({ length: 48 }, (_, i) => i + 1).filter(n => !lockedVals.has(n));

    const sample = () => {
      const shuffled = [...availablePool].sort(() => 0.5 - Math.random());
      const res = new Array(7);
      let pIdx = 0;
      for (let i = 0; i < 7; i++) {
        res[i] = (i in this.state.lockedSlots) ? this.state.lockedSlots[i] : shuffled[pIdx++];
      }
      return res;
    };

    if (allBets.length === 0) {
      this.publishDraw(sample());
      return;
    }

    let bestDraw = null;
    let bestScore = -Infinity;

    for (let i = 0; i < 2000; i++) {
      const cand = sample();
      let candPayout = 0;
      let winnersCount = 0;
      
      const first6 = new Set(cand.slice(0, 6));
      const mn = cand[6];
      const allZodiacs = new Set(cand.map(n => this.getZodiac(n)));
      const mnZodiac = this.getZodiac(mn);

      for (let b of allBets) {
        if (!b) continue;
        let won = false;
        const bAmt = b.bet_amount || b.bet_unit || 0;
        const bRatio = b.pay_ratio || 50;
        const cat = b.category || "only_mn";
        const bType = b.bet_type || "TM";
        const sel = b.selection;

        if (cat === "only_mn") {
          if (bType === "TM") won = (mn === parseInt(sel));
          else if (bType === "TX") won = (mnZodiac === parseInt(sel));
          else if (bType === "TMDS") won = (sel === "单" || sel === "Odd") ? (mn % 2 !== 0) : (mn % 2 === 0);
          else if (bType === "DX") won = (sel === "大" || sel === "Big") ? (mn >= 25) : (mn <= 24);
        } else if (cat === "all_7") {
          if (bType === "PTYX") won = allZodiacs.has(parseInt(sel));
          else if (["2LX", "3LX", "4LX"].includes(bType)) {
            const arr = Array.isArray(sel) ? sel : [sel];
            won = arr.every(z => allZodiacs.has(parseInt(z)));
          }
        } else if (cat === "first_6") {
          if (bType === "DP") won = first6.has(parseInt(sel));
          else if (["2Z2", "3Z3"].includes(bType)) {
            const arr = Array.isArray(sel) ? sel : [sel];
            won = arr.every(n => first6.has(parseInt(n)));
          }
        }
        if (won) {
          candPayout += (bAmt * bRatio);
          winnersCount++;
        }
      }

      const payoutDiff = Math.abs(candPayout - targetPayout);
      const score = -(payoutDiff) + (winnersCount * 30);

      if (score > bestScore) {
        bestScore = score;
        bestDraw = cand;
      }
    }

    this.publishDraw(bestDraw);
  }

  generateFairDraw() {
    const lockedVals = new Set(Object.values(this.state.lockedSlots));
    const availablePool = Array.from({ length: 48 }, (_, i) => i + 1).filter(n => !lockedVals.has(n));
    const shuffled = availablePool.sort(() => 0.5 - Math.random());
    
    const res = new Array(7);
    let pIdx = 0;
    for (let i = 0; i < 7; i++) {
      res[i] = (i in this.state.lockedSlots) ? this.state.lockedSlots[i] : shuffled[pIdx++];
    }
    this.publishDraw(res);
  }

  settleAll() {
    const allBets = this.getAllBets();
    if (this.hasPublishedDraw()) {
      const draw = this.state.drawNumbers;
      const first6 = new Set(draw.slice(0, 6));
      const mn = draw[6];
      const allZodiacs = new Set(draw.map(n => this.getZodiac(n)));
      const mnZodiac = this.getZodiac(mn);

      allBets.forEach(b => {
        if (!b) return;
        const betTimestamp = Date.parse(b.timestamp || '');
        if (!Number.isFinite(betTimestamp) || betTimestamp >= Date.parse(this.state.drawTimestamp)) {
          b.settled = false;
          b.won = false;
          b.payout = 0;
          b.net_profit = 0;
          return;
        }
        let won = false;
        const cat = b.category || "only_mn";
        const bType = b.bet_type || "TM";
        const sel = b.selection;
        const bAmt = b.bet_amount || b.bet_unit || 0;
        const bRatio = b.pay_ratio || 50;

        if (cat === "only_mn") {
          if (bType === "TM") won = (mn === parseInt(sel));
          else if (bType === "TX") won = (mnZodiac === parseInt(sel));
          else if (bType === "TMDS") won = (sel === "单" || sel === "Odd") ? (mn % 2 !== 0) : (mn % 2 === 0);
          else if (bType === "DX") won = (sel === "大" || sel === "Big") ? (mn >= 25) : (mn <= 24);
        } else if (cat === "all_7") {
          if (bType === "PTYX") won = allZodiacs.has(parseInt(sel));
          else if (["2LX", "3LX", "4LX"].includes(bType)) {
            const arr = Array.isArray(sel) ? sel : [sel];
            won = arr.every(z => allZodiacs.has(parseInt(z)));
          }
        } else if (cat === "first_6") {
          if (bType === "DP") won = first6.has(parseInt(sel));
          else if (["2Z2", "3Z3"].includes(bType)) {
            const arr = Array.isArray(sel) ? sel : [sel];
            won = arr.every(n => first6.has(parseInt(n)));
          }
        }
        b.settled = true;
        b.won = won;
        b.payout = won ? (bAmt * bRatio) : 0;
        b.net_profit = won ? b.payout : -bAmt;
      });
    } else {
      allBets.forEach(b => {
        if (b) {
          b.settled = false;
          b.won = false;
          b.payout = 0;
          b.net_profit = 0;
        }
      });
    }
    this.renderAll();
  }

  updateMetrics() {
    const allBets = this.getAllBets();
    const totalPool = allBets.reduce((s, b) => s + (b ? (b.bet_amount || b.bet_unit || 0) : 0), 0);
    const allBetsSettled = this.hasPublishedDraw() && allBets.every(b => !b || b.settled);
    let actualPayout = 0, playerProfit = 0;

    if (allBetsSettled) {
      allBets.forEach(b => {
        if (b && b.settled) {
          actualPayout += b.payout || 0;
          playerProfit += b.net_profit || 0;
        }
      });
    }

    const houseNet = totalPool - actualPayout;
    const totalSlipsCount = allBets.length;
    
    const uniqueClients = new Set();
    if (this.state.selfBetsList.length > 0) uniqueClients.add('Host');
    Object.entries(this.state.clientSlipsMap).forEach(([k, c]) => {
      if (c) uniqueClients.add(c.clientName || c.client_name || k);
    });
    const clientsCount = uniqueClients.size;

    const totalInEl = document.getElementById('m-val-total-in');
    if (totalInEl) {
      const slipsText = this.state.lang === 'zh' ? '注单' : 'Slips';
      const clientsText = this.state.lang === 'zh' ? '客户' : 'Clients';
      totalInEl.innerHTML = `¥${totalPool.toFixed(2)}<div style="font-size:11px; color:var(--text-muted); font-weight:normal; margin-top:4px;">${totalSlipsCount} ${slipsText} / ${clientsCount} ${clientsText}</div>`;
    }

    const targetPayEl = document.getElementById('m-val-target-payout');
    if (targetPayEl) {
      const controlLabel = this.state.lang === 'zh' ? '控盘档位' : 'Control Level';
      targetPayEl.innerHTML = `¥${(totalPool * (this.state.payoutSliderVal / 100)).toFixed(2)}<div style="font-size:11px; color:var(--text-muted); font-weight:normal; margin-top:4px;">${controlLabel}: ${this.state.payoutSliderVal}%</div>`;
    }

    const actualPayEl = document.getElementById('m-val-actual-payout');
    if (actualPayEl) {
      const payoutRatePct = totalPool > 0 ? ((actualPayout / totalPool) * 100).toFixed(1) : '0.0';
      const payoutLabel = this.state.lang === 'zh' ? '赔付率' : 'Payout Rate';
      actualPayEl.innerHTML = allBetsSettled ? `¥${actualPayout.toFixed(2)}<div style="font-size:11px; color:var(--text-muted); font-weight:normal; margin-top:4px;">${payoutLabel}: ${payoutRatePct}%</div>` : `--<div style="font-size:11px; color:var(--text-muted); font-weight:normal; margin-top:4px;">${payoutLabel}: --%</div>`;
    }
    
    const netEl = document.getElementById('m-val-house-profit');
    if (netEl) {
      const winRateVal = allBetsSettled
        ? (allBets.length ? ((allBets.filter(x => x && x.won).length / allBets.length) * 100).toFixed(1) : '0.0')
        : null;
      const winRateLabel = this.state.lang === 'zh' ? '胜率' : 'Win Rate';
      netEl.innerHTML = `${allBetsSettled ? (houseNet >= 0 ? '+' : '') + '¥' + houseNet.toFixed(2) : '--'}<div style="font-size:11px; color:var(--text-muted); font-weight:normal; margin-top:4px;">${winRateLabel}: ${winRateVal === null ? '--' : `${winRateVal}%`}</div>`;
      netEl.style.color = allBetsSettled ? (houseNet >= 0 ? 'var(--accent-green)' : 'var(--accent-red)') : 'var(--text-main)';
    }

    const fTotalCount = document.getElementById('f-total-count');
    if (fTotalCount) fTotalCount.innerText = allBets.length;

    const fTotalBet = document.getElementById('f-total-bet');
    if (fTotalBet) fTotalBet.innerText = `¥${totalPool.toFixed(2)}`;

    const fHouseProfit = document.getElementById('f-house-profit');
    if (fHouseProfit) fHouseProfit.innerText = allBetsSettled ? `¥${houseNet.toFixed(2)}` : '--';

    const badgeAllBets = document.getElementById('badge-all-bets');
    if (badgeAllBets) badgeAllBets.innerText = allBets.length;

    const badgeClients = document.getElementById('badge-clients-count');
    if (badgeClients) badgeClients.innerText = Object.keys(this.state.clientSlipsMap).length;
  }

  renderAll() {
    this.renderBallSlots();
    this.updateMetrics();
    this.renderMasterTable();
    this.renderQuickSettleTable();
    this.renderClientSubtabs();
    this.renderRulesAndZodiac();
  }

  renderMasterTable() {
    const masterThead = document.querySelector('#tab-combined .data-table thead tr');
    if (masterThead) {
      masterThead.innerHTML = `
        <th>${this.t('masterThSeq')}</th>
        <th>${this.t('masterThClient')}</th>
        <th>${this.t('masterThDevice')}</th>
        <th>${this.t('masterThTime')}</th>
        <th>${this.t('masterThType')}</th>
        <th>${this.t('masterThContent')}</th>
        <th>${this.t('masterThAmt')}</th>
        <th>${this.t('masterThRatio')}</th>
        <th>${this.t('masterThMaxBonus')}</th>
        <th>${this.t('masterThResult')}</th>
        <th>${this.t('masterThPL')}</th>
        <th>Action</th>
      `;
    }

    const tbody = document.getElementById('master-bets-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    let combinedItems = [];
    this.state.selfBetsList.forEach((b, idx) => {
      if (b) combinedItems.push({ type: 'self', index: idx, bet: b });
    });
    Object.entries(this.state.clientSlipsMap).forEach(([cKey, cObj]) => {
      if (!cObj) return;
      const betsArr = cObj.bets || (Array.isArray(cObj) ? cObj : []);
      betsArr.forEach((b, bIdx) => {
        if (b) combinedItems.push({ type: 'client', clientKey: cKey, betIndex: bIdx, bet: b });
      });
    });

    combinedItems.forEach((item, idx) => {
      const b = item.bet;
      const tr = document.createElement('tr');
      const selStr = this.formatSelectionDisplay(b.bet_type, b.selection);
      const bAmt = b.bet_amount || b.bet_unit || 0;
      const bRatio = b.pay_ratio || 50;

      let statusStr = `<span style="color:var(--text-muted);">${this.state.lang === 'zh' ? '待开奖' : 'Pending'}</span>`;
      if (b.settled) {
        statusStr = b.won 
          ? `<span style="color:var(--accent-green); font-weight:700;">+¥${b.payout.toFixed(2)} (${this.state.lang === 'zh' ? '中奖' : 'Won'})</span>`
          : `<span style="color:var(--accent-red);">${this.state.lang === 'zh' ? '未中' : 'Lost'}</span>`;
      }

      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td><strong>${this.escapeHtml(b.client || b.client_name || 'Anonymous')}</strong></td>
        <td>${b.device_id || '--'}</td>
        <td>${(b.timestamp || '').split('T')[0] || ''}</td>
        <td>${b.bet_type || 'TM'}</td>
        <td style="color:var(--accent-gold); font-weight:700;">${selStr}</td>
        <td>¥${bAmt.toFixed(2)}</td>
        <td>1:${bRatio}</td>
        <td>¥${(bAmt * bRatio).toFixed(2)}</td>
        <td>${statusStr}</td>
        <td>${b.settled ? (b.net_profit >= 0 ? '+' : '') + b.net_profit.toFixed(2) : '--'}</td>
        <td><button class="btn btn-sm" style="background:var(--accent-red); color:#fff; padding:2px 8px; border:none; border-radius:4px; cursor:pointer;">${this.t('removeBtn')}</button></td>
      `;

      tr.querySelector('button').addEventListener('click', () => {
        if (confirm(this.state.lang === 'zh' ? '是否确认删除此注单？' : 'Are you sure to remove this bet?')) {
          if (item.type === 'self') {
            this.state.selfBetsList.splice(item.index, 1);
          } else if (item.type === 'client') {
            const targetObj = this.state.clientSlipsMap[item.clientKey];
            if (targetObj && targetObj.bets) {
              targetObj.bets.splice(item.betIndex, 1);
              if (targetObj.bets.length === 0) delete this.state.clientSlipsMap[item.clientKey];
            } else if (Array.isArray(targetObj)) {
              targetObj.splice(item.betIndex, 1);
              if (targetObj.length === 0) delete this.state.clientSlipsMap[item.clientKey];
            }
          }
          this.saveToStorage();
          this.settleAll();
        }
      });

      tbody.appendChild(tr);
    });
  }

  renderQuickSettleTable() {
    const quickThead = document.querySelector('#tab-draw-gen .card:nth-child(3) .data-table thead tr');
    if (quickThead) {
      quickThead.innerHTML = `
        <th>${this.t('tableClient')}</th>
        <th>${this.t('tableCount')}</th>
        <th>${this.t('tableTotalBet')}</th>
        <th>${this.t('tableWinTotal')}</th>
        <th>${this.t('tableClientPL')}</th>
        <th>${this.t('tableHousePL')}</th>
        <th>${this.t('tableWinRate')}</th>
      `;
    }

    const tbody = document.getElementById('quick-settle-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const sources = [];
    if (this.state.selfBetsList.length) sources.push({ name: this.state.lang === 'zh' ? '庄家自投' : 'Host Direct', bets: this.state.selfBetsList });
    const clientSources = new Map();
    Object.entries(this.state.clientSlipsMap).forEach(([k, c]) => {
      if (!c) return;
      const cName = c.clientName || c.client_name || k;
      const cBets = c.bets || (Array.isArray(c) ? c : []);
      cBets.forEach(b => {
        if (!b) return;
        const name = b.client || b.client_name || cName;
        if (!clientSources.has(name)) clientSources.set(name, []);
        clientSources.get(name).push(b);
      });
    });
    clientSources.forEach((bets, name) => sources.push({ name, bets }));

    sources.forEach(s => {
      let totalBet = 0, totalPay = 0;
      s.bets.forEach(b => {
        if (b) {
          totalBet += (b.bet_amount || b.bet_unit || 0);
          if (b.settled) totalPay += b.payout || 0;
        }
      });
      const houseNet = totalBet - totalPay;
      const betsSettled = this.hasPublishedDraw() && s.bets.every(b => !b || b.settled);
      const validBets = s.bets.filter(Boolean);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${this.escapeHtml(s.name)}</strong></td>
        <td>${validBets.length}</td>
        <td>¥${totalBet.toFixed(2)}</td>
        <td>${betsSettled ? `¥${totalPay.toFixed(2)}` : '--'}</td>
        <td style="color:${betsSettled ? ((totalPay - totalBet) >= 0 ? 'var(--accent-green)' : 'var(--accent-red)') : 'var(--text-muted)'}">${betsSettled ? `¥${(totalPay - totalBet).toFixed(2)}` : '--'}</td>
        <td style="color:${betsSettled ? (houseNet >= 0 ? 'var(--accent-green)' : 'var(--accent-red)') : 'var(--text-muted)'}">${betsSettled ? `¥${houseNet.toFixed(2)}` : '--'}</td>
        <td>${betsSettled ? (validBets.length ? ((validBets.filter(x => x.won).length / validBets.length) * 100).toFixed(1) + '%' : '0%') : '--'}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  parseCSV(text) {
    const rows = [];
    let row = [], field = '', quoted = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (quoted) {
        if (char === '"' && text[i + 1] === '"') {
          field += '"';
          i++;
        } else if (char === '"') {
          quoted = false;
        } else {
          field += char;
        }
      } else if (char === '"' && field.length === 0) {
        quoted = true;
      } else if (char === ',') {
        row.push(field);
        field = '';
      } else if (char === '\n' || char === '\r') {
        if (char === '\r' && text[i + 1] === '\n') i++;
        row.push(field);
        if (row.some(value => value !== '')) rows.push(row);
        row = [];
        field = '';
      } else {
        field += char;
      }
    }
    row.push(field);
    if (row.some(value => value !== '')) rows.push(row);
    if (!rows.length) return [];

    const headers = rows.shift().map(value => value.trim().replace(/^\uFEFF/, '').toLowerCase());
    return rows.map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] || ''])));
  }

  groupBetsByClientName(bets, fallbackName) {
    const grouped = new Map();
    bets.forEach(bet => {
      if (!bet) return;
      const clientName = String(bet.client || bet.client_name || fallbackName).trim();
      if (!grouped.has(clientName)) grouped.set(clientName, []);
      grouped.get(clientName).push(bet);
    });
    return grouped;
  }

  addImportedClientSlip(deviceId, clientName, bets, slipId) {
    const normalizedDeviceId = String(deviceId || 'FILE-IMPORT').trim();
    const normalizedClientName = String(clientName || normalizedDeviceId).trim();
    const existingEntry = Object.entries(this.state.clientSlipsMap).find(([key, client]) =>
      client
      && String(client.deviceId || client.device_id || key) === normalizedDeviceId
      && String(client.clientName || client.client_name || key) === normalizedClientName
    );
    const key = existingEntry ? existingEntry[0] : JSON.stringify([normalizedDeviceId, normalizedClientName]);
    const existing = existingEntry ? existingEntry[1] : null;
    const existingBets = existing && (existing.bets || (Array.isArray(existing) ? existing : []));
    const mergedBets = Array.isArray(existingBets) ? [...existingBets] : [];
    const seenBets = new Set(mergedBets.filter(Boolean).map(bet => {
      if (bet.bet_id) return `id:${bet.bet_id}`;
      return `slip:${bet.slip_id || ''}:${bet.timestamp || ''}:${bet.bet_type || ''}:${JSON.stringify(bet.selection)}:${bet.bet_amount || bet.bet_unit || 0}`;
    }));

    bets.forEach(sourceBet => {
      if (!sourceBet || typeof sourceBet !== 'object') return;
      const bet = { ...sourceBet };
      bet.client = bet.client || bet.client_name || normalizedClientName;
      bet.client_name = bet.client_name || bet.client;
      bet.device_id = bet.device_id || normalizedDeviceId;
      bet.bet_amount = Number(bet.bet_amount || bet.stake_amount || bet.bet_unit || 0);
      bet.pay_ratio = Number(bet.pay_ratio || bet.ratio || 0);
      bet.timestamp = bet.timestamp || bet.created_at || '';
      bet.slip_id = bet.slip_id || slipId || '';
      if (typeof bet.category === 'string') bet.category = bet.category.toLowerCase();
      if (typeof bet.selection === 'string' && ['2LX', '3LX', '4LX', '2Z2', '3Z3'].includes(bet.bet_type)) {
        bet.selection = bet.selection.split(/[|;]/).map(value => value.trim()).filter(Boolean);
      }

      const identity = bet.bet_id
        ? `id:${bet.bet_id}`
        : `slip:${bet.slip_id}:${bet.timestamp}:${bet.bet_type || ''}:${JSON.stringify(bet.selection)}:${bet.bet_amount}`;
      if (!seenBets.has(identity)) {
        seenBets.add(identity);
        mergedBets.push(bet);
      }
    });

    if (mergedBets.length) {
      this.state.clientSlipsMap[key] = {
        ...(existing && !Array.isArray(existing) ? existing : {}),
        clientName: normalizedClientName,
        deviceId: normalizedDeviceId,
        bets: mergedBets
      };
    }
  }

  async readImportFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(reader.error || new Error(`Could not read ${file.name}`));
      reader.readAsText(file);
    });
  }

  async handleBatchUpload(e) {
    const files = Array.from(e.target.files || []);
    let importedCount = 0;
    const failures = [];

    for (const file of files) {
      try {
        const text = await this.readImportFile(file);
        const fallbackName = file.name.replace(/\.(json|csv)$/i, '');
        if (/\.csv$/i.test(file.name)) {
          const rows = this.parseCSV(text);
          const groups = new Map();
          rows.forEach(row => {
            const name = row.client_name || row.client || row.customer || row.client_id || fallbackName;
            const deviceId = row.device_id || row.deviceid || row.device || row.client_id || file.name;
            const identity = JSON.stringify([deviceId, name, row.slip_id || '']);
            if (!groups.has(identity)) groups.set(identity, { deviceId, name, slipId: row.slip_id, bets: [] });
            groups.get(identity).bets.push({
              ...row,
              bet_type: row.bet_type || row.gametype || row.game_type,
              selection: row.selection,
              bet_amount: row.bet_amount || row.stake_amount || row.bet_unit,
              pay_ratio: row.pay_ratio || row.ratio,
              timestamp: row.timestamp || row.time || row.created_at
            });
          });
          groups.forEach(group => {
            this.addImportedClientSlip(group.deviceId, group.name, group.bets, group.slipId);
            importedCount += group.bets.length;
          });
        } else if (/\.json$/i.test(file.name)) {
          const data = JSON.parse(text);
          const info = data && data.device_info ? data.device_info : {};
          const importRecord = (record, keyHint) => {
            if (!record || typeof record !== 'object') return;
            const recordInfo = record.device_info || {};
            const bets = Array.isArray(record.bets) ? record.bets : (Array.isArray(record) ? record : []);
            if (!bets.length) return;
            const firstNamedBet = bets.find(bet => bet && (bet.client || bet.client_name));
            const name = record.clientName || record.client_name || recordInfo.client_name
              || record.client || (firstNamedBet && (firstNamedBet.client || firstNamedBet.client_name)) || keyHint || fallbackName;
            const deviceId = record.deviceId || record.device_id || recordInfo.device_id || keyHint || file.name;
            this.groupBetsByClientName(bets, name).forEach((clientBets, clientName) => {
              this.addImportedClientSlip(deviceId, clientName, clientBets, record.slip_id);
              importedCount += clientBets.length;
            });
          };

          if (data && data.client_slips && typeof data.client_slips === 'object') {
            Object.entries(data.client_slips).forEach(([key, record]) => importRecord(record, key));
          } else if (data && Array.isArray(data.bets)) {
            importRecord({ ...data, device_info: info }, data.device_id || file.name);
          } else if (data && typeof data === 'object') {
            Object.entries(data).forEach(([key, record]) => importRecord(record, key));
          }
        } else {
          throw new Error(`Unsupported file type: ${file.name}`);
        }
      } catch (error) {
        failures.push(`${file.name}: ${error.message}`);
      }
    }

    if (importedCount > 0) {
      this.saveToStorage();
      this.settleAll();
    }
    if (failures.length) {
      alert(`${this.state.lang === 'zh' ? '部分文件导入失败' : 'Some files could not be imported'}:\n${failures.join('\n')}`);
    } else if (importedCount === 0 && files.length > 0) {
      alert(this.state.lang === 'zh' ? '未找到可导入的注单' : 'No importable bets were found');
    }
    e.target.value = '';
  }

  renderClientSubtabs() {
    const row = document.getElementById('client-subtabs-row');
    if (!row) return;
    row.innerHTML = '';
    const keys = Object.keys(this.state.clientSlipsMap);
    if (!keys.length) return;
    if (!this.state.activeClientKey) this.state.activeClientKey = keys[0];

    keys.forEach(k => {
      const clientObj = this.state.clientSlipsMap[k];
      if (!clientObj) return;
      const cName = clientObj.clientName || clientObj.client_name || k;
      const wrapper = document.createElement('div');
      wrapper.style.display = 'inline-flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.marginRight = '8px';
      wrapper.style.marginBottom = '8px';

      const btn = document.createElement('button');
      btn.className = `client-tab-btn ${k === this.state.activeClientKey ? 'active' : ''}`;
      btn.style.borderTopRightRadius = '0';
      btn.style.borderBottomRightRadius = '0';
      btn.innerText = `👤 ${cName}`;
      btn.addEventListener('click', () => {
        this.state.activeClientKey = k;
        this.renderClientSubtabs();
      });

      const removeBtn = document.createElement('button');
      removeBtn.className = 'btn btn-sm';
      removeBtn.style.background = 'var(--accent-red)';
      removeBtn.style.color = '#fff';
      removeBtn.style.border = 'none';
      removeBtn.style.borderTopLeftRadius = '0';
      removeBtn.style.borderBottomLeftRadius = '0';
      removeBtn.style.padding = '6px 10px';
      removeBtn.innerText = '✕';
      removeBtn.title = this.t('removeBtn');
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(this.state.lang === 'zh' ? `是否确认移除客户: ${cName}?` : `Remove client: ${cName}?`)) {
          delete this.state.clientSlipsMap[k];
          if (this.state.activeClientKey === k) {
            const remainingKeys = Object.keys(this.state.clientSlipsMap);
            this.state.activeClientKey = remainingKeys.length ? remainingKeys[0] : null;
          }
          this.saveToStorage();
          this.settleAll();
        }
      });

      wrapper.appendChild(btn);
      wrapper.appendChild(removeBtn);
      row.appendChild(wrapper);
    });
  }

  initSelfInputUI() {
    const sel = document.getElementById('host-self-gametype');
    if (!sel) return;
    sel.innerHTML = '';
    this.state.rulesConfig.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r.id;
      opt.innerText = `${this.state.lang === 'zh' ? r.name_zh : r.name_en} (1:${r.ratio})`;
      sel.appendChild(opt);
    });
    this.renderSelfPickArea();
  }

  renderSelfPickArea() {
    const area = document.getElementById('host-self-pick-area');
    if (!area) return;
    const gameTypeSel = document.getElementById('host-self-gametype');
    const gId = gameTypeSel ? gameTypeSel.value : 'TM';
    
    const isZodiacGame = (gId === 'TX' || gId === 'PTYX' || gId.includes('LX'));
    const isOddEven = (gId === 'TMDS');
    const isHighLow = (gId === 'DX');

    if (isZodiacGame) {
      let optionsHtml = '';
      Object.entries(this.state.zodiacConfig).forEach(([zId, z]) => {
        const zName = this.state.lang === 'zh' ? `${z.zh} (${z.en})` : `${z.en} (${z.zh})`;
        optionsHtml += `<option value="${zId}">${zId}. ${zName}</option>`;
      });

      const isMultiple = gId.includes('LX');
      let requiredCount = 0;
      if (gId === '2LX' || gId === '2Z2') requiredCount = 2;
      else if (gId === '3LX' || gId === '3Z3') requiredCount = 3;
      else if (gId === '4LX') requiredCount = 4;

      const noteText = this.state.lang === 'zh' 
        ? (requiredCount > 0 ? `请, 必须精确选择 ${requiredCount} 个生肖` : '请按住 Ctrl 多选生肖组合')
        : (requiredCount > 0 ? `Please select EXACTLY ${requiredCount} zodiacs` : 'Hold Ctrl to select multiple zodiacs');

      area.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:6px;">
          <label style="font-size:12px; color:var(--text-muted);">${noteText}</label>
          <select id="host-self-zodiac-select" class="form-control" ${isMultiple ? 'multiple size="6"' : ''} style="width:100%;" data-required-count="${requiredCount}">
            ${optionsHtml}
          </select>
        </div>
      `;
    } else if (isOddEven) {
      area.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:6px;">
          <label style="font-size:12px; color:var(--text-muted);">选择单双 (Odd/Even)</label>
          <select id="host-self-selection" class="form-control">
            <option value="单">单 (Odd)</option>
            <option value="双">双 (Even)</option>
          </select>
        </div>
      `;
    } else if (isHighLow) {
      area.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:6px;">
          <label style="font-size:12px; color:var(--text-muted);">选择大小 (High/Low)</label>
          <select id="host-self-selection" class="form-control">
            <option value="大">大 (High: 25-48)</option>
            <option value="小">小 (Low: 1-24)</option>
          </select>
        </div>
      `;
    } else {
      area.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:6px;">
          <label style="font-size:12px; color:var(--text-muted);">输入号码 (1-48)</label>
          <input type="text" id="host-self-selection" placeholder="${this.t('placeholderSelection')}" class="form-control">
        </div>
      `;
    }
  }

  addSelfBet() {
    const gId = document.getElementById('host-self-gametype').value;
    const rule = this.state.rulesConfig.find(r => r.id === gId);
    
    let selVal = '';
    const zodiacSelect = document.getElementById('host-self-zodiac-select');
    const selInput = document.getElementById('host-self-selection');

    if (zodiacSelect && zodiacSelect.multiple) {
      selVal = Array.from(zodiacSelect.selectedOptions).map(opt => opt.value);
      
      const requiredCount = parseInt(zodiacSelect.dataset.requiredCount || '0', 10);
      if (requiredCount > 0 && selVal.length !== requiredCount) {
        alert(this.state.lang === 'zh' 
          ? `此玩法必须选择且只能选择 ${requiredCount} 个生肖（当前选了 ${selVal.length} 个）` 
          : `This game type requires EXACTLY ${requiredCount} selections (you selected ${selVal.length})`
        );
        return;
      }

      if (selVal.length === 0) {
        alert(this.state.lang === 'zh' ? '请至少选择一个生肖' : 'Please select at least one zodiac');
        return;
      }
    } else if (zodiacSelect) {
      selVal = zodiacSelect.value;
    } else if (selInput) {
      selVal = selInput.value.trim();
    }

    if (!selVal || (Array.isArray(selVal) && selVal.length === 0)) {
      alert(this.state.lang === 'zh' ? '请输入或选择投注内容' : 'Please enter or select bet selection');
      return;
    }

    const amtInput = document.getElementById('host-self-amt');
    const amt = parseFloat(amtInput ? amtInput.value : '10');
    if (isNaN(amt) || amt <= 0) {
      alert(this.state.lang === 'zh' ? '请输入有效的投注金额' : 'Please enter valid bet amount');
      return;
    }

    const clientInput = document.getElementById('host-self-client');
    const clientName = clientInput ? clientInput.value.trim() : this.t('defaultClientName');

    let selectionsToProcess = [];
    if (typeof selVal === 'string' && selVal.includes(',')) {
      selectionsToProcess = selVal.split(',').map(s => s.trim()).filter(s => s !== '');
    } else {
      selectionsToProcess = [selVal];
    }

    selectionsToProcess.forEach(item => {
      const newBet = {
        client: clientName,
        device_id: 'HOST-MANUAL',
        timestamp: new Date().toISOString(),
        bet_type: gId,
        category: rule ? rule.category : 'only_mn',
        selection: item,
        bet_amount: amt,
        pay_ratio: rule ? rule.ratio : 50
      };
      this.state.selfBetsList.push(newBet);
    });

    this.saveToStorage();
    this.settleAll();

    if (selInput && !selInput.tagName.includes('SELECT')) selInput.value = '';
  }

  renderRulesAndZodiac() {
    const rulesTbody = document.getElementById('rules-settings-tbody');
    if (rulesTbody) {
      rulesTbody.innerHTML = '';
      const rulesHead = document.querySelector('#tab-rules .card:nth-child(1) .data-table thead tr');
      if (rulesHead) {
        rulesHead.innerHTML = `
          <th>${this.t('rulesThCode')}</th>
          <th>${this.t('rulesThName')}</th>
          <th>${this.t('rulesThCat')}</th>
          <th>${this.t('rulesThRatio')}</th>
        `;
      }
      this.state.rulesConfig.forEach((r, idx) => {
        const displayName = this.state.lang === 'zh' ? r.name_zh : (r.name_en || r.name_zh);
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${r.id}</strong></td>
          <td><input type="text" value="${displayName}" class="form-control" style="padding:4px 8px; font-size:12px;" data-rule-idx="${idx}" data-field="${this.state.lang === 'zh' ? 'name_zh' : 'name_en'}"></td>
          <td>${r.category}</td>
          <td><input type="number" value="${r.ratio}" class="form-control" style="padding:4px 8px; font-size:12px; width:80px;" data-rule-idx="${idx}" data-field="ratio"></td>
        `;
        rulesTbody.appendChild(tr);
      });

      rulesTbody.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.ruleIdx);
          const field = e.target.dataset.field;
          let val = e.target.value;
          if (field === 'ratio') val = parseFloat(val) || 1;
          this.state.rulesConfig[idx][field] = val;
          this.saveToStorage();
        });
      });
    }

    const zodiacTbody = document.getElementById('zodiac-settings-tbody');
    if (zodiacTbody) {
      zodiacTbody.innerHTML = '';
      const zodiacHead = document.querySelector('#tab-rules .card:nth-child(2) .data-table thead tr');
      if (zodiacHead) {
        zodiacHead.innerHTML = `
          <th>${this.t('zodiacThID')}</th>
          <th>${this.t('zodiacThZh')}</th>
          <th>${this.t('zodiacThEn')}</th>
          <th>${this.t('zodiacThNums')}</th>
        `;
      }
      Object.entries(this.state.zodiacConfig).forEach(([zId, z]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${zId}</strong></td>
          <td><input type="text" value="${z.zh}" class="form-control" style="padding:4px 8px; font-size:12px;" data-z-id="${zId}" data-field="zh"></td>
          <td><input type="text" value="${z.en}" class="form-control" style="padding:4px 8px; font-size:12px;" data-z-id="${zId}" data-field="en"></td>
          <td style="color:var(--accent-gold);">${z.numbers.join(', ')}</td>
        `;
        zodiacTbody.appendChild(tr);
      });

      zodiacTbody.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', (e) => {
          const zId = e.target.dataset.zId;
          const field = e.target.dataset.field;
          this.state.zodiacConfig[zId][field] = e.target.value;
          this.saveToStorage();
        });
      });
    }
  }
  
  async downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    if (window.showSaveFilePicker) {
      try {
        const extension = filename.split('.').pop();
        const handle = await window.showSaveFilePicker({
          suggestedName: filename,
          types: [{ description: `${extension.toUpperCase()} file`, accept: { [type.split(';')[0]]: [`.${extension}`] } }]
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }

    if (typeof File !== 'undefined' && navigator.canShare && navigator.share) {
      const file = new File([blob], filename, { type });
      if (navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: filename });
          return;
        } catch (error) {
          if (error.name === 'AbortError') return;
        }
      }
    }

    try {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        link.remove();
        URL.revokeObjectURL(url);
      }, 60000);
    } catch (error) {
      alert(`${this.state.lang === 'zh' ? '导出失败' : 'Export failed'}: ${error.message}`);
    }
  }

  exportCSV() {
    const allBets = this.getAllBets();
    if (!allBets.length) {
      alert(this.state.lang === 'zh' ? '暂无注单数据可导出' : 'No bet data to export');
      return;
    }
    let csv = 'Seq,Client,DeviceID,Time,GameType,Selection,BetAmount,Ratio,Status,Payout,NetProfit\n';
    allBets.forEach((b, i) => {
      if (!b) return;
      const selStr = Array.isArray(b.selection) ? b.selection.join(';') : b.selection;
      csv += `${i + 1},"${b.client || 'N/A'}","${b.device_id || 'N/A'}","${b.timestamp || ''}","${b.bet_type || ''}","${selStr}",${b.bet_amount || 0},${b.pay_ratio || 0},${b.settled ? (b.won ? 'Won' : 'Lost') : 'Pending'},${b.payout || 0},${b.net_profit || 0}\n`;
    });
    return this.downloadFile(
      `Lucky48_Report_${new Date().toISOString().split('T')[0]}.csv`,
      csv,
      'text/csv;charset=utf-8;'
    );
  }

  exportJSON() {
    const data = {
      export_date: new Date().toISOString(),
      draw_numbers: this.state.drawNumbers,
      self_bets: this.state.selfBetsList,
      client_slips: this.state.clientSlipsMap,
      rules_config: this.state.rulesConfig,
      zodiac_config: this.state.zodiacConfig
    };
    return this.downloadFile(
      `Lucky48_Data_${new Date().toISOString().split('T')[0]}.json`,
      JSON.stringify(data, null, 2),
      'application/json;charset=utf-8;'
    );
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.luckyHost = new Lucky48HostEngine();
});