import React from "react";

export function sanitizeRatedList(items) {
  if (!Array.isArray(items)) return [];
  return items
    .filter((r) => r && String(r.label || "").trim())
    .map((r) => ({
      label: String(r.label).trim(),
      score: Math.min(5, Math.max(1, parseInt(String(r.score), 10) || 3)),
    }));
}

function RatedListEditor({ title, items, onChange }) {
  const list = Array.isArray(items) ? items : [];
  const update = (i, patch) => {
    const next = list.map((row, j) => (j === i ? { ...row, ...patch } : row));
    const filled = next.filter((r) => String(r.label || "").trim());
    const drafting = next.find((r) => !String(r.label || "").trim());
    onChange(drafting ? [...filled, drafting] : filled);
  };
  const add = () => onChange([...sanitizeRatedList(list), { label: "", score: 3 }]);
  const remove = (i) => {
    onChange(sanitizeRatedList(list.filter((_, j) => j !== i)));
  };
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium text-foreground">{title}</h4>
        <button type="button" onClick={add} className="text-sm text-green-600 font-semibold hover:underline">
          + Add row
        </button>
      </div>
      {list.length === 0 ? (
        <p className="text-sm text-muted-foreground">No entries yet. Use &quot;Add row&quot; to add your own.</p>
      ) : null}
      <div className="space-y-2">
        {list.map((row, i) => (
          <div key={i} className="flex flex-wrap gap-2 items-end">
            <input
              type="text"
              placeholder="Label"
              value={row.label}
              onChange={(e) => update(i, { label: e.target.value })}
              className="flex-1 min-w-[140px] rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
            />
            <label className="text-xs text-muted-foreground whitespace-nowrap">
              Score 1–5
              <input
                type="number"
                min={1}
                max={5}
                value={row.score}
                onChange={(e) => update(i, { score: Math.min(5, Math.max(1, parseInt(e.target.value, 10) || 3)) })}
                className="ml-1 w-16 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-2 py-2 text-sm"
              />
            </label>
            <button type="button" onClick={() => remove(i)} className="text-sm text-red-600 dark:text-red-400 px-2 py-2">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function BulletListEditor({ label, items, onChange, placeholder = "Bullet point" }) {
  const list = items?.length ? items : [""];
  const setLine = (i, v) => {
    const next = list.map((x, j) => (j === i ? v : x));
    onChange(next);
  };
  const add = () => onChange([...list, ""]);
  const remove = (i) => {
    if (list.length <= 1) {
      onChange([""]);
      return;
    }
    onChange(list.filter((_, j) => j !== i));
  };
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <button type="button" onClick={add} className="text-xs text-green-600 font-semibold">
          + Add
        </button>
      </div>
      {list.map((line, i) => (
        <div key={i} className="flex gap-2">
          <input
            type="text"
            value={line}
            placeholder={placeholder}
            onChange={(e) => setLine(i, e.target.value)}
            className="flex-1 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
          />
          <button type="button" onClick={() => remove(i)} className="text-red-500 text-sm px-2">
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

const MONTH_OPTIONS = [
  { value: "", label: "Month" },
  ...["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((label, i) => ({
    value: i + 1,
    label,
  })),
];

const BIO_YEAR_OPTIONS = (() => {
  const ys = [];
  for (let y = 2036; y >= 1950; y--) ys.push(y);
  return ys;
})();

/** Month/year pickers; `showEnd` false hides end (e.g. current role). */
function MonthYearRange({ startLabel = "Start", endLabel = "End", startMonth, startYear, endMonth, endYear, showEnd, onChange }) {
  const sm = startMonth != null && startMonth !== "" ? String(startMonth) : "";
  const sy = startYear != null && startYear !== "" ? String(startYear) : "";
  const em = endMonth != null && endMonth !== "" ? String(endMonth) : "";
  const ey = endYear != null && endYear !== "" ? String(endYear) : "";

  return (
    <div className="md:col-span-2 grid gap-3 sm:grid-cols-2">
      <div>
        <span className="text-xs font-medium text-muted-foreground block mb-1">{startLabel}</span>
        <div className="flex gap-2">
          <select
            value={sm}
            onChange={(e) => {
              const v = e.target.value;
              onChange({ startMonth: v === "" ? undefined : parseInt(v, 10) });
            }}
            className="flex-1 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-2 py-2 text-sm"
          >
            {MONTH_OPTIONS.map((o) => (
              <option key={`sm-${o.value}`} value={o.value === "" ? "" : o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <select
            value={sy}
            onChange={(e) => {
              const v = e.target.value;
              onChange({ startYear: v === "" ? undefined : parseInt(v, 10) });
            }}
            className="w-28 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-2 py-2 text-sm"
          >
            <option value="">Year</option>
            {BIO_YEAR_OPTIONS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
      {showEnd ? (
        <div>
          <span className="text-xs font-medium text-muted-foreground block mb-1">{endLabel}</span>
          <div className="flex gap-2">
            <select
              value={em}
              onChange={(e) => {
                const v = e.target.value;
                onChange({ endMonth: v === "" ? undefined : parseInt(v, 10) });
              }}
              className="flex-1 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-2 py-2 text-sm"
            >
              {MONTH_OPTIONS.map((o) => (
                <option key={`em-${o.value}`} value={o.value === "" ? "" : o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <select
              value={ey}
              onChange={(e) => {
                const v = e.target.value;
                onChange({ endYear: v === "" ? undefined : parseInt(v, 10) });
              }}
              className="w-28 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-2 py-2 text-sm"
            >
              <option value="">Year</option>
              {BIO_YEAR_OPTIONS.map((y) => (
                <option key={`ey-${y}`} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className="flex items-end text-xs text-muted-foreground pb-2">End date omitted while marked current.</div>
      )}
    </div>
  );
}

export function BiodataFormSection({ biodata, onChange }) {
  const b = biodata || {};
  const patch = (partial) => onChange({ ...b, ...partial });

  const edu = b.education?.length ? b.education : [{}];
  const setEdu = (next) => patch({ education: next });

  const intn = b.internshipsTheses?.length ? b.internshipsTheses : [{}];
  const setIntn = (next) => patch({ internshipsTheses: next });

  const exp = b.experience?.length ? b.experience : [{}];
  const setExp = (next) => patch({ experience: next });

  return (
    <div className="space-y-10">
      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Professional title (CV header)</label>
          <input
            type="text"
            value={b.professionalTitle || ""}
            onChange={(e) => patch({ professionalTitle: e.target.value })}
            className="w-full rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground px-4 py-2 text-sm"
            placeholder="e.g. Bachelors of Mechanical Engineer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Citizenship</label>
          <input
            type="text"
            value={b.citizenship || ""}
            onChange={(e) => patch({ citizenship: e.target.value })}
            className="w-full rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground px-4 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Marital status</label>
          <input
            type="text"
            value={b.maritalStatus || ""}
            onChange={(e) => patch({ maritalStatus: e.target.value })}
            className="w-full rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground px-4 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Declaration place</label>
          <input
            type="text"
            value={b.declarationPlace || ""}
            onChange={(e) => patch({ declarationPlace: e.target.value })}
            className="w-full rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground px-4 py-2 text-sm"
            placeholder="City"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Signature name (footer)</label>
          <input
            type="text"
            value={b.signatureName || ""}
            onChange={(e) => patch({ signatureName: e.target.value })}
            className="w-full rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground px-4 py-2 text-sm"
          />
        </div>
      </section>

      <RatedListEditor title="Skillset (rated 1–5)" items={b.skillset} onChange={(skillset) => patch({ skillset })} />
      <RatedListEditor title="Languages" items={b.languages} onChange={(languages) => patch({ languages })} />
      <RatedListEditor title="IT skills" items={b.itSkills} onChange={(itSkills) => patch({ itSkills })} />
      <RatedListEditor
        title="Sports and hobbies"
        items={b.sportsAndHobbies}
        onChange={(sportsAndHobbies) => patch({ sportsAndHobbies })}
      />

      <section>
        <h4 className="text-lg font-medium text-foreground mb-3">Education (biodata)</h4>
        <div className="space-y-4">
          {edu.map((row, i) => (
            <div key={i} className="rounded-xl border border-border p-4 space-y-3 grid md:grid-cols-2 gap-2">
              <MonthYearRange
                startLabel="Started"
                endLabel="Ended"
                startMonth={row.startMonth}
                startYear={row.startYear}
                endMonth={row.endMonth}
                endYear={row.endYear}
                showEnd
                onChange={(periodPatch) => {
                  const next = edu.map((r, j) => (j === i ? { ...r, ...periodPatch } : r));
                  setEdu(next);
                }}
              />
              {["institutionName", "location", "courseOfStudy", "degreeType"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  value={row[field] || ""}
                  onChange={(e) => {
                    const next = edu.map((r, j) => (j === i ? { ...r, [field]: e.target.value } : r));
                    setEdu(next);
                  }}
                  className="rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
                />
              ))}
              <div className="md:col-span-2">
                <BulletListEditor
                  label="Focus areas (bullets)"
                  items={row.focusAreas}
                  onChange={(focusAreas) => {
                    const next = edu.map((r, j) => (j === i ? { ...r, focusAreas } : r));
                    setEdu(next);
                  }}
                />
              </div>
              <button
                type="button"
                className="text-sm text-red-600 dark:text-red-400 md:col-span-2"
                onClick={() => setEdu(edu.filter((_, j) => j !== i))}
              >
                Remove entry
              </button>
            </div>
          ))}
          <button type="button" onClick={() => setEdu([...edu, {}])} className="text-sm font-semibold text-green-600">
            + Add education
          </button>
        </div>
      </section>

      <section>
        <h4 className="text-lg font-medium text-foreground mb-3">Internship / thesis</h4>
        <div className="space-y-4">
          {intn.map((row, i) => (
            <div key={i} className="rounded-xl border border-border p-4 space-y-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={Boolean(row.isCurrent)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const next = intn.map((r, j) =>
                      j === i
                        ? {
                            ...r,
                            isCurrent: checked,
                            ...(checked
                              ? { endMonth: undefined, endYear: undefined, endDate: undefined }
                              : {}),
                          }
                        : r
                    );
                    setIntn(next);
                  }}
                />
                Current (show as “since …” in PDF; end date not used)
              </label>
              <MonthYearRange
                startLabel="Started"
                endLabel="Ended"
                startMonth={row.startMonth}
                startYear={row.startYear}
                endMonth={row.endMonth}
                endYear={row.endYear}
                showEnd={!row.isCurrent}
                onChange={(periodPatch) => {
                  const next = intn.map((r, j) => (j === i ? { ...r, ...periodPatch } : r));
                  setIntn(next);
                }}
              />
              <div className="grid md:grid-cols-2 gap-2">
                {["organizationName", "location", "entryType", "title"].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    value={row[field] || ""}
                    onChange={(e) => {
                      const next = intn.map((r, j) => (j === i ? { ...r, [field]: e.target.value } : r));
                      setIntn(next);
                    }}
                    className="rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
                  />
                ))}
              </div>
              <BulletListEditor
                label="Description bullets"
                items={row.descriptionBullets}
                onChange={(descriptionBullets) => {
                  const next = intn.map((r, j) => (j === i ? { ...r, descriptionBullets } : r));
                  setIntn(next);
                }}
              />
              <button type="button" className="text-sm text-red-600 dark:text-red-400" onClick={() => setIntn(intn.filter((_, j) => j !== i))}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => setIntn([...intn, { isCurrent: false }])} className="text-sm font-semibold text-green-600">
            + Add internship / thesis
          </button>
        </div>
      </section>

      <section>
        <h4 className="text-lg font-medium text-foreground mb-3">Work experience (detailed)</h4>
        <div className="space-y-4">
          {exp.map((row, i) => (
            <div key={i} className="rounded-xl border border-border p-4 space-y-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={Boolean(row.isCurrent)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const next = exp.map((r, j) =>
                      j === i
                        ? {
                            ...r,
                            isCurrent: checked,
                            ...(checked
                              ? { endMonth: undefined, endYear: undefined, endDate: undefined }
                              : {}),
                          }
                        : r
                    );
                    setExp(next);
                  }}
                />
                Current role (show as “since …”)
              </label>
              <MonthYearRange
                startLabel="Started"
                endLabel="Ended"
                startMonth={row.startMonth}
                startYear={row.startYear}
                endMonth={row.endMonth}
                endYear={row.endYear}
                showEnd={!row.isCurrent}
                onChange={(periodPatch) => {
                  const next = exp.map((r, j) => (j === i ? { ...r, ...periodPatch } : r));
                  setExp(next);
                }}
              />
              <div className="grid md:grid-cols-2 gap-2">
                {["companyName", "location", "roleTitle"].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    value={row[field] || ""}
                    onChange={(e) => {
                      const next = exp.map((r, j) => (j === i ? { ...r, [field]: e.target.value } : r));
                      setExp(next);
                    }}
                    className="rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
                  />
                ))}
              </div>
              <BulletListEditor
                label="Responsibilities"
                items={row.responsibilities}
                onChange={(responsibilities) => {
                  const next = exp.map((r, j) => (j === i ? { ...r, responsibilities } : r));
                  setExp(next);
                }}
              />
              <button type="button" className="text-sm text-red-600 dark:text-red-400" onClick={() => setExp(exp.filter((_, j) => j !== i))}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => setExp([...exp, { isCurrent: false }])} className="text-sm font-semibold text-green-600">
            + Add job
          </button>
        </div>
      </section>

      <BulletListEditor
        label="Key highlights (page 2 bullets)"
        items={b.keyHighlights}
        onChange={(keyHighlights) => patch({ keyHighlights })}
      />
    </div>
  );
}

const INQUIRY_SERVICES = [
  { value: "SOP", label: "Statement of Purpose (SOP)" },
  { value: "LOR", label: "Letter of Recommendation (LOR)" },
  { value: "EnglishLanguageTraining", label: "English Language Training (e.g. IELTS)" },
];

/** Values must match backend `Gender` enum. */
const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "transgender", label: "Transgender" },
  { value: "non_binary", label: "Non-binary" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
  { value: "other", label: "Other" },
];

export function StudentInquiryFormSection({ studentInquiry, onChange }) {
  const s = studentInquiry || {};
  const patch = (partial) => onChange({ ...s, ...partial });

  const toggleService = (value) => {
    const cur = new Set(s.inquiryAdditionalServices || []);
    if (cur.has(value)) cur.delete(value);
    else cur.add(value);
    patch({ inquiryAdditionalServices: Array.from(cur) });
  };

  const rows = s.educationOverview?.length ? s.educationOverview : [{}];
  const setRows = (next) => patch({ educationOverview: next });

  const addCountry = (v) => {
    const t = v.trim();
    if (!t) return;
    const cur = [...(s.targetCountries || [])];
    if (cur.length >= 3 || cur.includes(t)) return;
    patch({ targetCountries: [...cur, t] });
  };
  const removeCountry = (t) => patch({ targetCountries: (s.targetCountries || []).filter((x) => x !== t) });

  const addDegree = (v) => {
    const t = v.trim();
    if (!t) return;
    const cur = [...(s.targetDegrees || [])];
    if (cur.includes(t)) return;
    patch({ targetDegrees: [...cur, t] });
  };
  const removeDegree = (t) => patch({ targetDegrees: (s.targetDegrees || []).filter((x) => x !== t) });

  const addFieldOfStudy = (v) => {
    const t = v.trim();
    if (!t) return;
    const cur = [...(s.targetFieldsOfStudy || [])];
    if (cur.includes(t)) return;
    patch({ targetFieldsOfStudy: [...cur, t] });
  };
  const removeFieldOfStudy = (t) =>
    patch({ targetFieldsOfStudy: (s.targetFieldsOfStudy || []).filter((x) => x !== t) });

  const addUni = (v) => {
    const t = v.trim();
    if (!t) return;
    const cur = [...(s.shortlistedUniversitiesList || [])];
    if (cur.length >= 7 || cur.includes(t)) return;
    patch({ shortlistedUniversitiesList: [...cur, t] });
  };
  const removeUni = (t) =>
    patch({ shortlistedUniversitiesList: (s.shortlistedUniversitiesList || []).filter((x) => x !== t) });

  const et = s.englishTest || { testType: "IELTS", overall: "", sections: {}, otherNote: "" };
  const setEt = (partial) => {
    const next = {
      ...et,
      ...partial,
      sections: { ...(et.sections || {}), ...(partial.sections || {}) },
    };
    patch({ englishTest: next });
  };

  const famMembers = s.familyMembers?.length ? s.familyMembers : [{}];
  const setFamilyMembers = (next) => patch({ familyMembers: next });

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Gender</label>
          <select
            value={s.gender || ""}
            onChange={(e) => patch({ gender: e.target.value || undefined })}
            className="w-full rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground px-4 py-2 text-sm"
          >
            <option value="">Select…</option>
            {GENDER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-muted-foreground">Family members</label>
          <button
            type="button"
            className="text-xs text-green-600 font-semibold"
            disabled={famMembers.length >= 15}
            onClick={() => setFamilyMembers([...famMembers, { name: "", occupation: "" }])}
          >
            + Add member
          </button>
        </div>
        <p className="text-xs text-muted-foreground mb-2">Name and occupation per row (max 15).</p>
        <div className="space-y-3">
          {famMembers.map((m, i) => (
            <div key={i} className="rounded-xl border border-border p-3 grid sm:grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Name"
                value={m.name || ""}
                onChange={(e) => {
                  const next = famMembers.map((row, j) => (j === i ? { ...row, name: e.target.value } : row));
                  setFamilyMembers(next);
                }}
                className="rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Occupation"
                value={m.occupation || ""}
                onChange={(e) => {
                  const next = famMembers.map((row, j) => (j === i ? { ...row, occupation: e.target.value } : row));
                  setFamilyMembers(next);
                }}
                className="rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
              />
              <button
                type="button"
                className="text-sm text-red-600 dark:text-red-400 sm:col-span-2"
                onClick={() => {
                  if (famMembers.length <= 1) {
                    setFamilyMembers([{ name: "", occupation: "" }]);
                    return;
                  }
                  setFamilyMembers(famMembers.filter((_, j) => j !== i));
                }}
              >
                Remove member
              </button>
            </div>
          ))}
        </div>
      </div>

      <section>
        <h4 className="text-lg font-medium text-foreground mb-2">Education overview (table)</h4>
        <div className="space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="grid md:grid-cols-5 gap-2 items-end">
              {["degree", "year", "fieldOfStudy", "universityOrLocation", "percentageOrCgpa"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  value={row[field] || ""}
                  onChange={(e) => {
                    const next = rows.map((r, j) => (j === i ? { ...r, [field]: e.target.value } : r));
                    setRows(next);
                  }}
                  className="rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-2 py-2 text-xs"
                />
              ))}
              <button type="button" className="text-red-600 dark:text-red-400 text-sm" onClick={() => setRows(rows.filter((_, j) => j !== i))}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => setRows([...rows, {}])} className="text-sm text-green-600 font-semibold">
            + Add row
          </button>
        </div>
      </section>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1">Motivation for further studies</label>
        <textarea
          rows={5}
          value={s.motivationForFurtherStudies || ""}
          onChange={(e) => patch({ motivationForFurtherStudies: e.target.value })}
          className="w-full rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground px-4 py-2 text-sm"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Target countries (max 3)</label>
          <StringListChips
            items={s.targetCountries || []}
            onRemove={removeCountry}
            onAdd={addCountry}
            max={3}
            placeholder="Add country"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Target degrees</label>
          <StringListChips
            items={s.targetDegrees || []}
            onRemove={removeDegree}
            onAdd={addDegree}
            placeholder="Add degree"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-muted-foreground mb-1">Target fields of study</label>
          <StringListChips
            items={s.targetFieldsOfStudy || []}
            onRemove={removeFieldOfStudy}
            onAdd={addFieldOfStudy}
            placeholder="Add field of study"
          />
        </div>
      </div>

      <section className="rounded-xl border border-border p-4 space-y-3">
        <h4 className="font-medium text-foreground">English proficiency</h4>
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-muted-foreground">Test type</label>
            <select
              value={et.testType || "IELTS"}
              onChange={(e) => setEt({ testType: e.target.value })}
              className="w-full rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
            >
              {["IELTS", "TOEFL", "PTE", "Other"].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Overall</label>
            <input
              type="text"
              value={et.overall || ""}
              onChange={(e) => setEt({ overall: e.target.value })}
              className="w-full rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
              placeholder="e.g. 7.5 bands"
            />
          </div>
        </div>
        <p className="text-xs text-blue-700 dark:text-blue-300">IELTS: Listening, Reading, Writing, Speaking</p>
        <div className="grid md:grid-cols-2 gap-2">
          {["listening", "reading", "writing", "speaking"].map((key) => (
            <div key={key}>
              <label className="text-xs text-muted-foreground capitalize">{key}</label>
              <input
                type="text"
                value={(et.sections && et.sections[key]) || ""}
                onChange={(e) => setEt({ sections: { [key]: e.target.value } })}
                className="w-full rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
              />
            </div>
          ))}
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Other / notes</label>
          <input
            type="text"
            value={et.otherNote || ""}
            onChange={(e) => setEt({ otherNote: e.target.value })}
            className="w-full rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
          />
        </div>
      </section>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1">Additional test / certificate (GRE, GMAT, …)</label>
        <input
          type="text"
          value={s.additionalTestOrCertificate || ""}
          onChange={(e) => patch({ additionalTestOrCertificate: e.target.value })}
          className="w-full rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground px-4 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1">Shortlisted universities (max 7)</label>
        <StringListChips
          items={s.shortlistedUniversitiesList || []}
          onRemove={removeUni}
          onAdd={addUni}
          max={7}
          placeholder="Add university"
        />
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-2">Additional services (inquiry form)</p>
        <div className="space-y-2">
          {INQUIRY_SERVICES.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={(s.inquiryAdditionalServices || []).includes(opt.value)}
                onChange={() => toggleService(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <BulletListEditor
        label="Comments (bullets)"
        items={s.inquiryComments}
        onChange={(inquiryComments) => patch({ inquiryComments })}
      />
    </div>
  );
}

function StringListChips({ items, onRemove, onAdd, max, placeholder = "Add item" }) {
  const [draft, setDraft] = React.useState("");
  const atMax = max != null && items.length >= max;

  const submit = () => {
    if (atMax) return;
    onAdd(draft);
    setDraft("");
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <span key={t} className="inline-flex items-center gap-1 rounded-full bg-muted text-foreground px-3 py-1 text-sm">
            {t}
            <button type="button" className="text-red-500" onClick={() => onRemove(t)}>
              ×
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
          placeholder={placeholder}
          className="flex-1 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
        />
        <button type="button" className="rounded-lg bg-foreground text-background px-3 py-2 text-sm" onClick={submit} disabled={atMax}>
          Add
        </button>
      </div>
      {max != null ? (
        <p className="text-xs text-muted-foreground">
          {items.length}/{max} added
        </p>
      ) : items.length > 0 ? (
        <p className="text-xs text-muted-foreground">{items.length} added</p>
      ) : null}
    </div>
  );
}
