import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import {
  Loading,
  LoadingSmall,
  LoadingLarge,
  LoadingInline,
} from "@/components/common/Loading";

describe("Loading Components", () => {
  describe("Loading (standard)", () => {
    it("renders loading spinner", () => {
      render(<Loading />);
      const spinner = document.querySelector(".animate-spin");
      expect(spinner).toBeInTheDocument();
    });

    it("has correct structure with two divs", () => {
      const { container } = render(<Loading />);
      const spinnerContainer = container.querySelector(".relative.w-12.h-12");
      expect(spinnerContainer).toBeInTheDocument();
    });

    it("applies correct CSS classes", () => {
      const { container } = render(<Loading />);
      expect(
        container.querySelector(".flex.items-center.justify-center")
      ).toBeInTheDocument();
    });
  });

  describe("LoadingSmall", () => {
    it("renders smaller spinner", () => {
      const { container } = render(<LoadingSmall />);
      const spinnerContainer = container.querySelector(".w-6.h-6");
      expect(spinnerContainer).toBeInTheDocument();
    });

    it("has smaller dimensions", () => {
      const { container } = render(<LoadingSmall />);
      expect(container.querySelector(".w-6.h-6")).toBeInTheDocument();
    });
  });

  describe("LoadingLarge", () => {
    it("renders large spinner with text", () => {
      render(<LoadingLarge />);
      expect(screen.getByText("Loading data...")).toBeInTheDocument();
    });

    it("has large dimensions", () => {
      const { container } = render(<LoadingLarge />);
      expect(container.querySelector(".w-20.h-20")).toBeInTheDocument();
    });

    it("displays loading text", () => {
      render(<LoadingLarge />);
      expect(screen.getByText("Loading data...")).toHaveClass("text-slate-400");
    });
  });

  describe("LoadingInline", () => {
    it("renders inline spinner", () => {
      const { container } = render(<LoadingInline />);
      expect(container.querySelector(".inline-block")).toBeInTheDocument();
    });

    it("has inline-block display", () => {
      const { container } = render(<LoadingInline />);
      expect(container.querySelector(".inline-block")).toBeInTheDocument();
    });
  });
});
