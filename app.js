  
    const PROGRAM = {
      1: {
        name: 'Squat + Chest',
        color: '#ff4444',
        exercises: [
          { name: 'Back Squat', sets: '4×5', notes: 'Start light, focus on depth + control' },
          { name: 'Bench Press', sets: '4×6-8' },
          { name: 'Incline DB Press', sets: '3×8-12' },
          { name: 'Cable Fly', sets: '3×12-15' },
          { name: 'Push-ups', sets: '1-2×AMRAP', optional: true }
        ]
      },
      2: {
        name: 'Deadlift + Back',
        color: '#4488ff',
        exercises: [
          { name: 'Deadlift', sets: '3×5', notes: 'Keep 1-2 reps in the tank' },
          { name: 'Lat Pulldown', sets: '4×8-12' },
          { name: 'Seated Cable Row', sets: '3×8-12' },
          { name: 'Face Pulls', sets: '3×12-15' },
          { name: 'Back Extension', sets: '2×12', optional: true }
        ]
      },
      3: {
        name: 'Run + Core',
        color: '#44ff88',
        exercises: [
          { name: 'Easy Run', sets: '20-30min', notes: 'Conversational pace' },
          { name: 'Bird Dogs', sets: '2-3×10/side' },
          { name: 'Dead Bugs', sets: '2-3×10/side' },
          { name: 'Plank', sets: '2-3×30-45s' },
          { name: 'Leg Raises', sets: '2-3×10-15' }
        ]
      },
      4: {
        name: 'Bench + Shoulders',
        color: '#ffbb44',
        exercises: [
          { name: 'Bench Press', sets: '5×5', notes: 'Heavy day' },
          { name: 'Seated DB Shoulder Press', sets: '3×8-12' },
          { name: 'Lateral Raises', sets: '4×12-15' },
          { name: 'Rear Delt Fly', sets: '3×12-15' },
          { name: 'Dips', sets: '2×8-12', optional: true }
        ]
      },
      5: {
        name: 'OHP + Arms',
        color: '#aa44ff',
        exercises: [
          { name: 'Overhead Press', sets: '4×6-8' },
          { name: 'Barbell Curl', sets: '3×10-12' },
          { name: 'Hammer Curl', sets: '3×10-12' },
          { name: 'Tricep Pushdown', sets: '3×10-15' },
          { name: 'Overhead Tricep Extension', sets: '2-3×12-15' }
        ]
      }
    };

    const SEED_DATA = {
      startDate: '2026-03-30',
      maxes: {
        'Squat': null,
        'Bench': null,
        'Dead': null,
        'OHP': null
      },
      weights: [
        { date: '2026-03-30', weight: 146.7 },
        { date: '2026-03-31', weight: 150 },
        { date: '2026-04-01', weight: 150.4 },
        { date: '2026-04-02', weight: 152.2 },
        { date: '2026-04-03', weight: 153.2 },
        { date: '2026-04-04', weight: 157.6 },
        { date: '2026-04-05', weight: 155.6 },
        { date: '2026-04-06', weight: 156 },
        { date: '2026-04-08', weight: 156 }
      ],
      sessions: [
        {
          date: '2026-03-30',
          dayNumber: 1,
          exercises: [
            { name: 'Back Squat', sets: [{ weight: 40, reps: 10 }, { weight: 40, reps: 10 }, { weight: 40, reps: 10 }] },
            { name: 'Bench Press', sets: [{ weight: 40, reps: 10 }, { weight: 40, reps: 10 }, { weight: 50, reps: 10 }] },
            { name: 'Incline DB Press', sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }] },
            { name: 'Cable Fly', sets: [{ weight: 40, reps: 10 }, { weight: 40, reps: 10 }, { weight: 40, reps: 10 }] }
          ]
        },
        {
          date: '2026-03-31',
          dayNumber: 2,
          exercises: [
            { name: 'Deadlift', sets: [{ weight: 70, reps: 5 }, { weight: 70, reps: 5 }, { weight: 70, reps: 5 }] },
            { name: 'Lat Pulldown', sets: [{ weight: 50, reps: 10 }, { weight: 50, reps: 10 }, { weight: 50, reps: 10 }, { weight: 50, reps: 10 }] },
            { name: 'Seated Cable Row', sets: [{ weight: 50, reps: 10 }, { weight: 50, reps: 10 }, { weight: 50, reps: 10 }] },
            { name: 'Face Pulls', sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }] }
          ]
        },
        {
          date: '2026-04-06',
          dayNumber: 1,
          exercises: [
            { name: 'Back Squat', sets: [{ weight: 60, reps: 5 }, { weight: 60, reps: 5 }, { weight: 60, reps: 5 }, { weight: 60, reps: 5 }] },
            { name: 'Bench Press', sets: [{ weight: 60, reps: 7 }, { weight: 60, reps: 7 }, { weight: 60, reps: 7 }, { weight: 60, reps: 7 }] },
            { name: 'Incline DB Press', sets: [{ weight: 25, reps: 8 }, { weight: 25, reps: 8 }, { weight: 25, reps: 8 }] }
          ]
        },
        {
          date: '2026-04-07',
          dayNumber: 2,
          exercises: [
            { name: 'Deadlift', sets: [{ weight: 70, reps: 5 }, { weight: 70, reps: 5 }, { weight: 70, reps: 5 }] },
            { name: 'Lat Pulldown', sets: [{ weight: 70, reps: 10 }, { weight: 70, reps: 10 }, { weight: 70, reps: 10 }, { weight: 70, reps: 10 }] },
            { name: 'Seated Cable Row', sets: [{ weight: 70, reps: 8 }, { weight: 70, reps: 8 }, { weight: 70, reps: 8 }] }
          ]
        }
      ]
    };

    class ProgramTracker {
      constructor() {
        this.init();
      }

      async init() {
        try {
          const existing = await window.storage.get('program-data');
          if (!existing) {
            await window.storage.set('program-data', JSON.stringify(SEED_DATA));
            this.data = SEED_DATA;
          } else {
            this.data = JSON.parse(existing.value);
          }
        } catch (e) {
          this.data = SEED_DATA;
        }

        this.bindEvents();
        this.updateHeader();
        this.renderView('today');
      }

      async saveData() {
        try {
          await window.storage.set('program-data', JSON.stringify(this.data));
        } catch (e) {
          console.error('Save failed:', e);
        }
      }

      bindEvents() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`${btn.dataset.view}View`).classList.add('active');
            this.renderView(btn.dataset.view);
          });
        });

        // Weight logger toggle
        document.getElementById('weightLoggerToggle').addEventListener('click', () => {
          const expanded = document.getElementById('weightLoggerExpanded');
          expanded.classList.toggle('active');
          if (expanded.classList.contains('active')) {
            document.getElementById('weightInput').focus();
          }
        });

        // Save weight
        document.getElementById('saveWeightBtn').addEventListener('click', async () => {
          const weight = parseFloat(document.getElementById('weightInput').value);
          if (!weight) return;

          const today = new Date().toISOString().split('T')[0];
          const existingIndex = this.data.weights.findIndex(w => w.date === today);
          
          if (existingIndex >= 0) {
            this.data.weights[existingIndex].weight = weight;
          } else {
            this.data.weights.push({ date: today, weight });
          }

          await this.saveData();
          document.getElementById('weightInput').value = '';
          document.getElementById('weightLoggerExpanded').classList.remove('active');
          this.updateHeader();
          this.notify('Weight logged');
        });

        // 1RM tracking
        document.querySelectorAll('.max-item').forEach(item => {
          item.addEventListener('click', () => {
            this.editMax(item.dataset.lift);
          });
        });
      }

      getDayOfProgram() {
        const start = new Date(this.data.startDate);
        const today = new Date();
        const daysSinceStart = Math.floor((today - start) / (1000 * 60 * 60 * 24));
        const dayInWeek = daysSinceStart % 7;
        
        // Map: 0,1,2,3,4 = Day 1-5, 5,6 = Rest
        if (dayInWeek >= 0 && dayInWeek <= 4) {
          return dayInWeek + 1;
        }
        return 0; // Rest day
      }

      getWeekNumber() {
        const start = new Date(this.data.startDate);
        const today = new Date();
        const daysSinceStart = Math.floor((today - start) / (1000 * 60 * 60 * 24));
        return Math.floor(daysSinceStart / 7) + 1;
      }

      updateHeader() {
        const dayNum = this.getDayOfProgram();
        const weekNum = this.getWeekNumber();
        const latestWeight = this.data.weights[this.data.weights.length - 1];
        
        if (dayNum === 0) {
          document.getElementById('todayBadge').textContent = 'REST DAY';
          document.getElementById('workoutTitle').textContent = 'Recovery Day';
          document.getElementById('workoutSubtitle').textContent = 'Active rest or light activity';
        } else {
          document.getElementById('todayBadge').textContent = `DAY ${dayNum}`;
          document.getElementById('workoutTitle').textContent = PROGRAM[dayNum].name;
          document.getElementById('workoutSubtitle').textContent = `${PROGRAM[dayNum].exercises.length} exercises`;
        }
        
        document.getElementById('weekNumber').textContent = weekNum;
        document.getElementById('currentWeight').textContent = latestWeight ? `${latestWeight.weight}lb` : '--';
        
        // Update weight logger display
        const today = new Date().toISOString().split('T')[0];
        const todayWeight = this.data.weights.find(w => w.date === today);
        if (todayWeight) {
          document.getElementById('weightLoggerValue').textContent = `${todayWeight.weight} lb`;
        } else {
          document.getElementById('weightLoggerValue').textContent = 'Tap to log →';
        }
        
        // Update 1RM displays
        if (!this.data.maxes) {
          this.data.maxes = { 'Squat': null, 'Bench': null, 'Dead': null, 'OHP': null };
        }
        document.getElementById('maxSquat').textContent = this.data.maxes['Squat'] || '--';
        document.getElementById('maxBench').textContent = this.data.maxes['Bench'] || '--';
        document.getElementById('maxDead').textContent = this.data.maxes['Dead'] || '--';
        document.getElementById('maxOHP').textContent = this.data.maxes['OHP'] || '--';
        
        // Calculate week progress
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        const completedThisWeek = this.data.sessions.filter(s => {
          const sessionDate = new Date(s.date);
          return sessionDate >= weekStart;
        }).length;
        document.getElementById('weekProgress').textContent = `${completedThisWeek}/5`;
      }

      renderView(view) {
        if (view === 'today') {
          this.renderTodayView();
        } else if (view === 'week') {
          this.renderWeekView();
        } else if (view === 'history') {
          this.renderHistoryView();
        } else if (view === 'weight') {
          this.renderWeightView();
        }
      }

      renderTodayView() {
        const dayNum = this.getDayOfProgram();
        
        if (dayNum === 0) {
          document.getElementById('todayView').innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--gray-400);">
              <div style="font-size: 48px; margin-bottom: 16px;">🛌</div>
              <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">Rest & Recover</div>
              <div style="font-size: 12px;">Growth happens during rest. Come back tomorrow.</div>
            </div>
          `;
          return;
        }

        // Get custom template if exists, otherwise use default program
        const customTemplate = this.data.templates && this.data.templates[dayNum];
        const workout = customTemplate || PROGRAM[dayNum];
        const isCustom = !!customTemplate;
        
        const today = new Date().toISOString().split('T')[0];
        const todaySession = this.data.sessions.find(s => s.date === today && s.dayNumber === dayNum);

        document.getElementById('todayView').innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <div class="section-title" style="margin: 0;">Today's Exercises</div>
            <button class="action-btn" id="customizeWorkout" style="flex: none; padding: 8px 12px;">
              ${isCustom ? 'Edit Template' : 'Customize'}
            </button>
          </div>
          
          <div class="exercise-list">
            ${workout.exercises.map(ex => {
              const lastSets = this.getLastSets(ex.name);
              const completed = todaySession?.exercises.find(e => e.name === ex.name);
              
              return `
                <div class="exercise-card" data-exercise="${ex.name}">
                  <div class="exercise-header">
                    <div class="exercise-name">${ex.name}</div>
                    ${completed ? '<div class="status-badge">Done</div>' : ''}
                  </div>
                  <div class="exercise-prescription">${ex.sets}${ex.notes ? ' • ' + ex.notes : ''}</div>
                  <div class="exercise-last">
                    ${lastSets ? `Last: ${this.formatSets(lastSets)}` : 'No history yet'}
                    ${this.checkPR(ex.name) ? '<div class="pr-badge"></div>' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;

        document.getElementById('customizeWorkout').addEventListener('click', () => {
          this.customizeWorkout(dayNum);
        });

        document.querySelectorAll('.exercise-card').forEach(card => {
          card.addEventListener('click', () => {
            this.openExercise(card.dataset.exercise, dayNum);
          });
        });
      }

      getLastSets(exerciseName) {
        for (let i = this.data.sessions.length - 1; i >= 0; i--) {
          const ex = this.data.sessions[i].exercises.find(e => e.name === exerciseName);
          if (ex) return ex.sets;
        }
        return null;
      }

      formatSets(sets) {
        if (!sets || sets.length === 0) return '';
        const first = sets[0];
        return `${sets.length}×${first.reps} @ ${first.weight}lb`;
      }

      checkPR(exerciseName) {
        const sessions = this.data.sessions.filter(s => 
          s.exercises.some(e => e.name === exerciseName)
        );
        if (sessions.length < 2) return false;

        const latest = sessions[sessions.length - 1].exercises.find(e => e.name === exerciseName);
        const prev = sessions[sessions.length - 2].exercises.find(e => e.name === exerciseName);
        
        if (!latest || !prev) return false;

        const latestMax = Math.max(...latest.sets.map(s => s.weight));
        const prevMax = Math.max(...prev.sets.map(s => s.weight));
        
        return latestMax > prevMax;
      }

      renderWeekView() {
        const dayNum = this.getDayOfProgram();
        
        document.getElementById('weekView').innerHTML = `
          <div class="week-grid">
            ${[1, 2, 3, 4, 5].map(day => {
              const program = PROGRAM[day];
              return `
                <div class="day-card ${day === dayNum ? 'active' : ''}" data-day="${day}">
                  <div class="day-header">
                    <div class="day-number">Day ${day}</div>
                    ${day === dayNum ? '<div class="status-badge">Today</div>' : ''}
                  </div>
                  <div class="day-title">${program.name}</div>
                  <div class="day-exercises">
                    ${program.exercises.filter(e => !e.optional).map(e => e.name).join(' • ')}
                  </div>
                </div>
              `;
            }).join('')}
            
            <div class="day-card">
              <div class="day-number">Rest Days</div>
              <div class="day-title">Recovery</div>
              <div class="day-exercises">Active rest, mobility work, or complete rest</div>
            </div>
          </div>
        `;

        document.querySelectorAll('.day-card[data-day]').forEach(card => {
          card.addEventListener('click', () => {
            const day = parseInt(card.dataset.day);
            this.renderDayDetail(day);
          });
        });
      }

      renderDayDetail(dayNum) {
        const program = PROGRAM[dayNum];
        
        document.getElementById('exerciseModal').innerHTML = `
          <div class="modal-header">
            <div>
              <div class="modal-title">Day ${dayNum}: ${program.name}</div>
              <div class="modal-prescription">${program.exercises.length} exercises</div>
            </div>
            <button class="close-btn" id="closeModal">×</button>
          </div>
          <div class="modal-content">
            <div class="exercise-list">
              ${program.exercises.map(ex => {
                const lastSets = this.getLastSets(ex.name);
                return `
                  <div class="exercise-card" data-exercise="${ex.name}">
                    <div class="exercise-name">${ex.name}${ex.optional ? ' (Optional)' : ''}</div>
                    <div class="exercise-prescription">${ex.sets}${ex.notes ? ' • ' + ex.notes : ''}</div>
                    <div class="exercise-last">
                      ${lastSets ? `Last: ${this.formatSets(lastSets)}` : 'No history yet'}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;

        document.getElementById('exerciseModal').classList.add('active');
        document.getElementById('closeModal').addEventListener('click', () => {
          document.getElementById('exerciseModal').classList.remove('active');
        });

        document.querySelectorAll('#exerciseModal .exercise-card').forEach(card => {
          card.addEventListener('click', () => {
            document.getElementById('exerciseModal').classList.remove('active');
            this.openExercise(card.dataset.exercise, dayNum);
          });
        });
      }

      renderHistoryView() {
        const exercises = [...new Set(this.data.sessions.flatMap(s => s.exercises.map(e => e.name)))];
        
        document.getElementById('historyView').innerHTML = `
          <div class="section-header">Exercise Progress</div>
          <div class="history-filters" id="exerciseFilters"></div>
          <div id="historyContent"></div>
          
          <div class="section-header" style="margin-top: 24px;">All Sessions</div>
          <div id="sessionsList"></div>
        `;

        const renderFilters = (selected = exercises[0]) => {
          document.getElementById('exerciseFilters').innerHTML = `
            <select class="filter-btn" style="flex: 2;" id="exerciseSelect">
              ${exercises.map(ex => `<option value="${ex}" ${ex === selected ? 'selected' : ''}>${ex}</option>`).join('')}
            </select>
          `;

          document.getElementById('exerciseSelect').addEventListener('change', (e) => {
            renderHistory(e.target.value);
          });

          renderHistory(selected);
        };

        const renderHistory = (exerciseName) => {
          const sessions = this.data.sessions
            .filter(s => s.exercises.some(e => e.name === exerciseName))
            .reverse();

          document.getElementById('historyContent').innerHTML = `
            <div class="history-chart">
              ${this.renderProgressChart(exerciseName)}
            </div>
            
            <div class="section-header">Sessions (${sessions.length})</div>
            <div class="history-list">
              ${sessions.map(s => {
                const ex = s.exercises.find(e => e.name === exerciseName);
                return `
                  <div class="history-item">
                    <div>
                      <div class="history-date">${new Date(s.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    </div>
                    <div class="history-sets">${this.formatSets(ex.sets)}</div>
                  </div>
                `;
              }).join('')}
            </div>
          `;
        };

        if (exercises.length > 0) {
          renderFilters();
        }
        
        this.renderSessionsList();
      }

      renderSessionsList() {
        const sessions = [...this.data.sessions].reverse();
        
        document.getElementById('sessionsList').innerHTML = sessions.map(s => {
          const dayName = PROGRAM[s.dayNumber] ? PROGRAM[s.dayNumber].name : 'Workout';
          return `
            <div class="session-card">
              <div class="session-date">${new Date(s.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • Day ${s.dayNumber}: ${dayName}</div>
              <div class="session-exercises">
                ${s.exercises.map(ex => `${ex.name}: ${this.formatSets(ex.sets)}`).join('<br>')}
              </div>
              <div class="session-actions">
                <button class="action-btn" data-date="${s.date}" data-day="${s.dayNumber}">Edit</button>
                <button class="action-btn delete" data-date="${s.date}">Delete</button>
              </div>
            </div>
          `;
        }).join('');

        // Edit session
        document.querySelectorAll('.action-btn:not(.delete)').forEach(btn => {
          btn.addEventListener('click', () => {
            const date = btn.dataset.date;
            const dayNum = parseInt(btn.dataset.day);
            this.editSession(date, dayNum);
          });
        });

        // Delete session
        document.querySelectorAll('.action-btn.delete').forEach(btn => {
          btn.addEventListener('click', async () => {
            if (!confirm('Delete this entire workout session?')) return;
            
            const date = btn.dataset.date;
            const index = this.data.sessions.findIndex(s => s.date === date);
            if (index >= 0) {
              this.data.sessions.splice(index, 1);
              await this.saveData();
              this.notify('Session deleted');
              this.updateHeader();
              this.renderHistoryView();
            }
          });
        });
      }

      editSession(date, dayNum) {
        const session = this.data.sessions.find(s => s.date === date);
        if (!session) return;

        const program = PROGRAM[dayNum];
        
        document.getElementById('exerciseModal').innerHTML = `
          <div class="modal-header">
            <div>
              <div class="modal-title">Edit Session</div>
              <div class="modal-prescription">${new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
            </div>
            <button class="close-btn" id="closeModal">×</button>
          </div>
          <div class="modal-content">
            <div class="exercise-list">
              ${session.exercises.map(ex => `
                <div class="exercise-card" data-exercise="${ex.name}">
                  <div class="exercise-header">
                    <div class="exercise-name">${ex.name}</div>
                    <button class="remove-btn" data-exercise="${ex.name}" style="position: relative; width: auto; height: auto; padding: 4px 8px; font-size: 11px;">Remove</button>
                  </div>
                  <div class="exercise-last">${this.formatSets(ex.sets)}</div>
                </div>
              `).join('')}
            </div>
            
            <button class="btn btn-outline" style="margin-top: 16px;" id="closeModal2">Done</button>
          </div>
        `;

        document.getElementById('exerciseModal').classList.add('active');

        document.getElementById('closeModal').addEventListener('click', () => {
          document.getElementById('exerciseModal').classList.remove('active');
        });

        document.getElementById('closeModal2').addEventListener('click', () => {
          document.getElementById('exerciseModal').classList.remove('active');
        });

        // Edit individual exercise
        document.querySelectorAll('.exercise-card').forEach(card => {
          card.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) return;
            document.getElementById('exerciseModal').classList.remove('active');
            this.editPastExercise(card.dataset.exercise, date, dayNum);
          });
        });

        // Remove exercise from session
        document.querySelectorAll('.remove-btn').forEach(btn => {
          btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (!confirm(`Remove ${btn.dataset.exercise} from this session?`)) return;

            const exIndex = session.exercises.findIndex(e => e.name === btn.dataset.exercise);
            if (exIndex >= 0) {
              session.exercises.splice(exIndex, 1);
              
              // If no exercises left, delete the session
              if (session.exercises.length === 0) {
                const sessionIndex = this.data.sessions.findIndex(s => s.date === date);
                this.data.sessions.splice(sessionIndex, 1);
              }
              
              await this.saveData();
              this.notify('Exercise removed');
              document.getElementById('exerciseModal').classList.remove('active');
              this.updateHeader();
              this.renderHistoryView();
            }
          });
        });
      }

      editPastExercise(exerciseName, date, dayNum) {
        const session = this.data.sessions.find(s => s.date === date);
        const exercise = session.exercises.find(e => e.name === exerciseName);
        
        document.getElementById('exerciseModal').innerHTML = `
          <div class="modal-header">
            <div>
              <div class="modal-title">${exerciseName}</div>
              <div class="modal-prescription">${new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
            </div>
            <button class="close-btn" id="closeModal">×</button>
          </div>
          <div class="modal-content">
            <div class="set-grid" id="setGrid"></div>
            
            <button class="btn btn-outline" id="addSetBtn">Add Set</button>
            <button class="btn" id="saveBtn">Save Changes</button>
          </div>
        `;

        document.getElementById('exerciseModal').classList.add('active');
        this.renderSets(exercise.sets, exerciseName);

        document.getElementById('closeModal').addEventListener('click', () => {
          document.getElementById('exerciseModal').classList.remove('active');
        });

        document.getElementById('addSetBtn').addEventListener('click', () => {
          const sets = this.getCurrentSets();
          const last = sets[sets.length - 1] || { weight: 0, reps: 0 };
          sets.push({ weight: last.weight, reps: last.reps });
          this.renderSets(sets, exerciseName);
        });

        document.getElementById('saveBtn').addEventListener('click', async () => {
          const sets = this.getCurrentSets().filter(s => s.weight > 0 || s.reps > 0);
          if (sets.length === 0) {
            this.notify('Add at least one set');
            return;
          }

          exercise.sets = sets;
          await this.saveData();
          document.getElementById('exerciseModal').classList.remove('active');
          this.notify('Changes saved');
          this.renderHistoryView();
        });
      }

      renderWeightView() {
        const weights = [...this.data.weights].reverse();
        const latest = this.data.weights[this.data.weights.length - 1];
        const start = this.data.weights[0];
        const change = latest && start ? latest.weight - start.weight : 0;
        const avg = this.data.weights.length > 0 
          ? (this.data.weights.reduce((sum, w) => sum + w.weight, 0) / this.data.weights.length).toFixed(1)
          : 0;

        document.getElementById('weightView').innerHTML = `
          <div class="weight-stats">
            <div class="weight-stat-box">
              <div class="weight-stat-label">Current</div>
              <div class="weight-stat-value">${latest ? latest.weight : '--'}</div>
            </div>
            <div class="weight-stat-box">
              <div class="weight-stat-label">Change</div>
              <div class="weight-stat-value">${change >= 0 ? '+' : ''}${change.toFixed(1)}</div>
            </div>
            <div class="weight-stat-box">
              <div class="weight-stat-label">Average</div>
              <div class="weight-stat-value">${avg}</div>
            </div>
          </div>
          
          <div class="weight-chart">
            ${this.renderWeightChart()}
          </div>
          
          <div class="section-header">All Entries (${weights.length})</div>
          <div class="weight-list">
            ${weights.map(w => `
              <div class="weight-item">
                <div class="weight-date">${new Date(w.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                <div style="display: flex; align-items: center;">
                  <div class="weight-value">${w.weight} lb</div>
                  <button class="weight-delete" data-date="${w.date}">×</button>
                </div>
              </div>
            `).join('')}
          </div>
        `;

        // Delete weight entry
        document.querySelectorAll('.weight-delete').forEach(btn => {
          btn.addEventListener('click', async () => {
            if (!confirm('Delete this weight entry?')) return;
            
            const date = btn.dataset.date;
            const index = this.data.weights.findIndex(w => w.date === date);
            if (index >= 0) {
              this.data.weights.splice(index, 1);
              await this.saveData();
              this.notify('Weight deleted');
              this.updateHeader();
              this.renderWeightView();
            }
          });
        });
      }

      renderWeightChart() {
        const weights = this.data.weights.slice(-30); // Last 30 entries

        if (weights.length === 0) {
          return '<div style="color: var(--gray-400); font-size: 12px;">No data yet</div>';
        }

        const values = weights.map(w => w.weight);
        const max = Math.max(...values);
        const min = Math.min(...values);

        return `
          <div style="font-size: 12px; color: var(--gray-500); margin-bottom: 12px;">Weight Trend (Last ${weights.length} entries)</div>
          <div style="display: flex; align-items: flex-end; gap: 2px; height: 120px;">
            ${values.map(w => {
              const height = (w / max) * 100;
              return `<div style="flex: 1; background: var(--black); height: ${height}%; min-height: 4px;"></div>`;
            }).join('')}
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 11px; color: var(--gray-400);">
            <span>0 lb</span>
            <span>${max} lb (peak)</span>
          </div>
        `;
      }

      renderProgressChart(exerciseName) {
        const sessions = this.data.sessions
          .filter(s => s.exercises.some(e => e.name === exerciseName))
          .slice(-10);

        if (sessions.length === 0) {
          return '<div style="color: var(--gray-400); font-size: 12px;">No data yet</div>';
        }

        const maxWeights = sessions.map(s => {
          const ex = s.exercises.find(e => e.name === exerciseName);
          return Math.max(...ex.sets.map(set => set.weight));
        });

        const max = Math.max(...maxWeights);
        const min = Math.min(...maxWeights);

        return `
          <div style="font-size: 12px; color: var(--gray-500); margin-bottom: 12px;">Max Weight Progression</div>
          <div style="display: flex; align-items: flex-end; gap: 4px; height: 120px;">
            ${maxWeights.map(w => {
              const height = (w / max) * 100;
              return `<div style="flex: 1; background: var(--black); height: ${height}%; min-height: 4px;"></div>`;
            }).join('')}
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 11px; color: var(--gray-400);">
            <span>0 lb</span>
            <span>${max} lb (peak)</span>
          </div>
        `;
      }

      openExercise(exerciseName, dayNum) {
        const lastSets = this.getLastSets(exerciseName) || [{ weight: 0, reps: 0 }];
        const history = this.getExerciseHistory(exerciseName);

        document.getElementById('exerciseModal').innerHTML = `
          <div class="modal-header">
            <div>
              <div class="modal-title">${exerciseName}</div>
              <div class="modal-prescription">Day ${dayNum}</div>
            </div>
            <button class="close-btn" id="closeModal">×</button>
          </div>
          <div class="modal-content">
            <div class="section-header">Recent History</div>
            <div class="history-list">
              ${history.slice(0, 3).map(h => `
                <div class="history-item">
                  <div class="history-date">${new Date(h.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                  <div class="history-sets">${this.formatSets(h.sets)}</div>
                </div>
              `).join('')}
              ${history.length === 0 ? '<div class="history-item"><div style="color: var(--gray-400); font-size: 12px;">No history yet</div></div>' : ''}
            </div>
            
            <div class="section-header">Today's Sets</div>
            <div class="set-grid" id="setGrid"></div>
            
            <button class="btn btn-outline" id="addSetBtn">Add Set</button>
            <button class="btn" id="saveBtn">Save Workout</button>
          </div>
        `;

        document.getElementById('exerciseModal').classList.add('active');

        this.renderSets(lastSets, exerciseName);

        document.getElementById('closeModal').addEventListener('click', () => {
          document.getElementById('exerciseModal').classList.remove('active');
        });

        document.getElementById('addSetBtn').addEventListener('click', () => {
          const sets = this.getCurrentSets();
          const last = sets[sets.length - 1] || { weight: 0, reps: 0 };
          sets.push({ weight: last.weight, reps: last.reps });
          this.renderSets(sets, exerciseName);
        });

        document.getElementById('saveBtn').addEventListener('click', () => {
          this.saveExercise(exerciseName, dayNum);
        });
      }

      getExerciseHistory(exerciseName) {
        return this.data.sessions
          .filter(s => s.exercises.some(e => e.name === exerciseName))
          .reverse()
          .map(s => ({
            date: s.date,
            sets: s.exercises.find(e => e.name === exerciseName).sets
          }));
      }

      renderSets(sets, exerciseName) {
        document.getElementById('setGrid').innerHTML = sets.map((set, i) => `
          <div class="set-row">
            <div class="set-num">${i + 1}</div>
            <input type="number" class="set-input" placeholder="LBS" value="${set.weight || ''}" data-index="${i}" data-field="weight">
            <input type="number" class="set-input" placeholder="REPS" value="${set.reps || ''}" data-index="${i}" data-field="reps">
            <button class="remove-btn" data-index="${i}">×</button>
          </div>
        `).join('');

        document.querySelectorAll('.remove-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const sets = this.getCurrentSets();
            sets.splice(parseInt(btn.dataset.index), 1);
            this.renderSets(sets.length > 0 ? sets : [{ weight: 0, reps: 0 }], exerciseName);
          });
        });
      }

      getCurrentSets() {
        const inputs = document.querySelectorAll('#setGrid .set-input');
        const sets = [];
        inputs.forEach(input => {
          const index = parseInt(input.dataset.index);
          const field = input.dataset.field;
          if (!sets[index]) sets[index] = {};
          sets[index][field] = parseFloat(input.value) || 0;
        });
        return sets;
      }

      async saveExercise(exerciseName, dayNum) {
        const sets = this.getCurrentSets().filter(s => s.weight > 0 || s.reps > 0);
        if (sets.length === 0) {
          this.notify('Add at least one set');
          return;
        }

        const today = new Date().toISOString().split('T')[0];
        let session = this.data.sessions.find(s => s.date === today && s.dayNumber === dayNum);
        
        if (!session) {
          session = { date: today, dayNumber: dayNum, exercises: [] };
          this.data.sessions.push(session);
        }

        const existingIndex = session.exercises.findIndex(e => e.name === exerciseName);
        if (existingIndex >= 0) {
          session.exercises[existingIndex].sets = sets;
        } else {
          session.exercises.push({ name: exerciseName, sets });
        }

        await this.saveData();
        document.getElementById('exerciseModal').classList.remove('active');
        this.notify('Workout saved');
        this.updateHeader();
        this.renderView('today');
      }

      editMax(liftName) {
        const currentMax = this.data.maxes[liftName];
        const fullName = liftName === 'Dead' ? 'Deadlift' : liftName === 'OHP' ? 'Overhead Press' : liftName === 'Bench' ? 'Bench Press' : 'Back Squat';
        
        document.getElementById('exerciseModal').innerHTML = `
          <div class="modal-header">
            <div>
              <div class="modal-title">${fullName} 1RM</div>
              <div class="modal-prescription">One-rep max</div>
            </div>
            <button class="close-btn" id="closeModal">×</button>
          </div>
          <div class="modal-content">
            <div class="section-header">Current Max</div>
            <div style="font-size: 32px; font-weight: 600; margin-bottom: 24px; text-align: center;">
              ${currentMax || '--'} ${currentMax ? 'lb' : ''}
            </div>
            
            <div class="section-header">Update Max</div>
            <div class="weight-input-row">
              <input type="number" class="weight-input" id="maxInput" placeholder="Enter new 1RM" value="${currentMax || ''}" step="5">
              <button class="weight-save-btn" id="saveMaxBtn">Save</button>
            </div>
            
            ${currentMax ? '<button class="btn btn-outline" style="margin-top: 12px;" id="clearMaxBtn">Clear Max</button>' : ''}
          </div>
        `;

        document.getElementById('exerciseModal').classList.add('active');
        document.getElementById('maxInput').focus();

        document.getElementById('closeModal').addEventListener('click', () => {
          document.getElementById('exerciseModal').classList.remove('active');
        });

        document.getElementById('saveMaxBtn').addEventListener('click', async () => {
          const max = parseFloat(document.getElementById('maxInput').value);
          if (!max) return;

          this.data.maxes[liftName] = max;
          await this.saveData();
          document.getElementById('exerciseModal').classList.remove('active');
          this.updateHeader();
          this.notify('1RM updated');
        });

        if (currentMax) {
          document.getElementById('clearMaxBtn').addEventListener('click', async () => {
            this.data.maxes[liftName] = null;
            await this.saveData();
            document.getElementById('exerciseModal').classList.remove('active');
            this.updateHeader();
            this.notify('1RM cleared');
          });
        }
      }

      customizeWorkout(dayNum) {
        // Initialize templates if not exists
        if (!this.data.templates) {
          this.data.templates = {};
        }

        // Get current template or default
        const currentTemplate = this.data.templates[dayNum] || PROGRAM[dayNum];
        const exercises = [...currentTemplate.exercises];

        const renderCustomizer = () => {
          document.getElementById('exerciseModal').innerHTML = `
            <div class="modal-header">
              <div>
                <div class="modal-title">Customize Day ${dayNum}</div>
                <div class="modal-prescription">${PROGRAM[dayNum].name}</div>
              </div>
              <button class="close-btn" id="closeModal">×</button>
            </div>
            <div class="modal-content">
              <div class="section-header">Exercises</div>
              <div class="exercise-list" style="margin-bottom: 16px;">
                ${exercises.map((ex, index) => `
                  <div class="exercise-card">
                    <div class="exercise-header">
                      <div class="exercise-name">${ex.name}</div>
                      <button class="remove-btn" data-index="${index}" style="position: relative; width: auto; height: auto; padding: 4px 8px; font-size: 11px;">Remove</button>
                    </div>
                    <div class="exercise-prescription">${ex.sets}${ex.notes ? ' • ' + ex.notes : ''}</div>
                  </div>
                `).join('')}
              </div>
              
              <button class="btn btn-outline" id="addExerciseBtn">Add Exercise</button>
              ${this.data.templates[dayNum] ? '<button class="btn btn-outline" id="resetBtn">Reset to Default</button>' : ''}
              <button class="btn" id="saveTemplateBtn">Save Template</button>
            </div>
          `;

          document.getElementById('exerciseModal').classList.add('active');

          document.getElementById('closeModal').addEventListener('click', () => {
            document.getElementById('exerciseModal').classList.remove('active');
          });

          // Remove exercise
          document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              const index = parseInt(btn.dataset.index);
              exercises.splice(index, 1);
              renderCustomizer();
            });
          });

          // Add exercise
          document.getElementById('addExerciseBtn').addEventListener('click', () => {
            this.addExerciseToTemplate(exercises, renderCustomizer);
          });

          // Reset to default
          if (this.data.templates[dayNum]) {
            document.getElementById('resetBtn').addEventListener('click', async () => {
              if (!confirm('Reset this day to the default program?')) return;
              delete this.data.templates[dayNum];
              await this.saveData();
              document.getElementById('exerciseModal').classList.remove('active');
              this.notify('Reset to default');
              this.renderView('today');
            });
          }

          // Save template
          document.getElementById('saveTemplateBtn').addEventListener('click', async () => {
            if (exercises.length === 0) {
              this.notify('Add at least one exercise');
              return;
            }

            this.data.templates[dayNum] = {
              name: PROGRAM[dayNum].name,
              color: PROGRAM[dayNum].color,
              exercises: exercises
            };

            await this.saveData();
            document.getElementById('exerciseModal').classList.remove('active');
            this.notify('Template saved');
            this.renderView('today');
          });
        };

        renderCustomizer();
      }

      addExerciseToTemplate(exercises, rerenderCallback) {
        // Common exercises list
        const allExercises = [
          'Back Squat', 'Front Squat', 'Bench Press', 'Incline Bench Press', 'Overhead Press',
          'Deadlift', 'Romanian Deadlift', 'Lat Pulldown', 'Pull-ups', 'Barbell Row',
          'Seated Cable Row', 'Face Pulls', 'Lateral Raises', 'Rear Delt Fly',
          'Bicep Curl', 'Hammer Curl', 'Tricep Pushdown', 'Overhead Tricep Extension',
          'Leg Press', 'Leg Curl', 'Leg Extension', 'Calf Raises',
          'DB Incline Press', 'Cable Fly', 'Chest Fly', 'Dips', 'Push-ups',
          'Plank', 'Bird Dogs', 'Dead Bugs', 'Leg Raises', 'Back Extension',
          'Easy Run'
        ];

        document.getElementById('exerciseModal').innerHTML = `
          <div class="modal-header">
            <div>
              <div class="modal-title">Add Exercise</div>
              <div class="modal-prescription">Select from list or create custom</div>
            </div>
            <button class="close-btn" id="closeModal">×</button>
          </div>
          <div class="modal-content">
            <div class="section-header">Common Exercises</div>
            <div class="exercise-list" style="margin-bottom: 16px;">
              ${allExercises.map(ex => `
                <div class="exercise-card" data-exercise="${ex}">
                  <div class="exercise-name">${ex}</div>
                </div>
              `).join('')}
            </div>
            
            <div class="section-header">Or Create Custom</div>
            <input type="text" class="input-minimal" id="customExerciseName" placeholder="Exercise name" style="margin-bottom: 8px;">
            <input type="text" class="input-minimal" id="customExerciseSets" placeholder="Sets/reps (e.g., 3×10)" style="margin-bottom: 8px;">
            <button class="btn" id="addCustomBtn">Add Custom Exercise</button>
          </div>
        `;

        document.getElementById('closeModal').addEventListener('click', () => {
          rerenderCallback();
        });

        // Select from list
        document.querySelectorAll('.exercise-card').forEach(card => {
          card.addEventListener('click', () => {
            exercises.push({
              name: card.dataset.exercise,
              sets: '3×10'
            });
            rerenderCallback();
          });
        });

        // Add custom
        document.getElementById('addCustomBtn').addEventListener('click', () => {
          const name = document.getElementById('customExerciseName').value.trim();
          const sets = document.getElementById('customExerciseSets').value.trim();
          
          if (!name) {
            this.notify('Enter exercise name');
            return;
          }

          exercises.push({
            name: name,
            sets: sets || '3×10'
          });
          rerenderCallback();
        });
      }

      notify(message) {
        const notif = document.getElementById('notification');
        notif.textContent = message;
        notif.classList.add('show');
        setTimeout(() => notif.classList.remove('show'), 2000);
      }
    }

    const app = new ProgramTracker();
