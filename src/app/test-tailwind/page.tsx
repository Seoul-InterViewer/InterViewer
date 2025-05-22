import React, { ReactNode } from "react";

export default function TestTailwind() {
  return (
    <div className="p-8 bg-background">
      <h1 className="font-bold-32 text-main mb-6">Tailwind Test Page</h1>

      {/* Colors */}
      <section className="mb-8">
        <h2 className="font-sb-18 mb-4">Color Tests</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-32 h-16 bg-main flex-center">main</div>
          <div className="w-32 h-16 bg-font text-background flex-center">font</div>
          <div className="w-32 h-16 bg-correct flex-center">correct</div>
          <div className="w-32 h-16 bg-incorrect text-background flex-center">incorrect</div>
          <div className="w-32 h-16 bg-correct-bg flex-center">correct-bg</div>
          <div className="w-32 h-16 bg-incorrect-bg flex-center">incorrect-bg</div>
          <div className="w-32 h-16 bg-tag flex-center">tag</div>
          <div className="w-32 h-16 bg-border flex-center">border</div>
          <div className="w-32 h-16 bg-sub-text text-background flex-center">sub-text</div>
          <div className="w-32 h-16 bg-font-gray text-background flex-center">font-gray</div>
        </div>
      </section>

      {/* Font Sizes */}
      <section className="mb-8">
        <h2 className="font-sb-18 mb-4">Font Size & Weight Tests</h2>

        <h3 className="font-sb-16 mb-2">Bold</h3>
        <p className="font-bold-56 mb-2">Bold 56</p>
        <p className="font-bold-48 mb-2">Bold 48</p>
        <p className="font-bold-40 mb-2">Bold 40</p>
        <p className="font-bold-38 mb-2">Bold 38</p>
        <p className="font-bold-32 mb-2">Bold 32</p>
        <p className="font-bold-18 mb-2">Bold 18</p>
        <p className="font-bold-14 mb-2">Bold 14</p>

        <h3 className="font-sb-16 mb-2 mt-4">Semibold</h3>
        <p className="font-sb-28 mb-2">Semibold 28</p>
        <p className="font-sb-24 mb-2">Semibold 24</p>
        <p className="font-sb-20 mb-2">Semibold 20</p>
        <p className="font-sb-18 mb-2">Semibold 18</p>
        <p className="font-sb-16 mb-2">Semibold 16</p>
        <p className="font-sb-14 mb-2">Semibold 14</p>
        <p className="font-sb-12 mb-2">Semibold 12</p>

        <h3 className="font-sb-16 mb-2 mt-4">Regular</h3>
        <p className="font-regular-24 mb-2">Regular 24</p>
        <p className="font-regular-18 mb-2">Regular 18</p>
        <p className="font-regular-14 mb-2">Regular 14</p>

        <h3 className="font-sb-16 mb-2 mt-4">Medium</h3>
        <p className="font-medium-12 mb-2">Medium 12</p>
        <p className="font-medium-10 mb-2">Medium 10</p>
        <p className="font-medium-8 mb-2">Medium 8</p>
      </section>

      {/* Custom Utilities */}
      <section className="mb-8">
        <h2 className="font-sb-18 mb-4">Utility Classes</h2>

        <div className="mb-4">
          <p className="mb-2">flex-center:</p>
          <div className="w-64 h-24 bg-tag flex-center">
            <span>Centered Content</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2">hover-filter (hover over):</p>
          <div className="w-64 h-24 bg-main flex-center hover-filter">
            <span>Hover over me</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2">absolute-center:</p>
          <div className="w-64 h-24 bg-tag relative">
            <div className="absolute-center bg-main px-2 py-1">
              <span>Centered Element</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2">custom border:</p>
          <div className="custom-border w-64 h-24 flex-center">
            <span>Element with Custom Border</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2">Color border:</p>
          <div className="border-2 border-main w-64 h-24 flex-center">
            <span>Element with MainColor Border</span>
          </div>
        </div>
      </section>
    </div>
  );
}
